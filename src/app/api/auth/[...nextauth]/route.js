import { prisma } from '@/lib/prisma'
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import  hash  from "bcrypt";
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
        
        

        const userFound = prisma.users.findUnique({
            where: {
                email: credentials.email
            }
        })
        const userData  = await userFound

        if (!userData) throw new Error("Invalid credentials")

        


        const passwrodMatch = await hash.compare(credentials.password,  userData.password)


        if (!passwrodMatch) throw new Error("Invalid credentials" + userData)


  
        return userData
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
    async session({
        session, token
    }) {
      session.user = token
      return session
    }
  }

  







})

export { handler as GET, handler as POST }
