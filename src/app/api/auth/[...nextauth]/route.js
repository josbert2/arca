import { prisma } from '@/lib/prisma'
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { NextResponse } from 'next/server'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        
        return NextResponse.json({ message: "Hello World" })

        const userFound = prisma.user.findUnique({
            where: {
                email: credentials.email
            }
        })

        if (!userFound) throw new Error("Invalid credentials")

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          userFound.password
        )

        if (!passwordMatch) throw new Error("Invalid credentials")

        console.log(userFound)

        return userFound
      }
    })
  ],
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user
      return token
    },
    async session({ session, token }) {
      session.user = token.user
      return session
    }
  }
})

export { handler as GET, handler as POST }
