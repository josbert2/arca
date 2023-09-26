import { prisma } from '@/lib/prisma'
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"


export async function POST(request) {
  try {



    const { fullname, email, password } = await request.json()

    if (password < 6)
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      )


    const userFound = await prisma.users.findUnique({
        where: {
            email
        }
    })



    


    if (userFound)
      return NextResponse.json(
        {
          message: "Email already exists"
        },
        {
          status: 409
        }
      )

    const hashedPassword = await bcrypt.hash(password.toString(), 10)

    

    const user = prisma.users.create({
      data: {
        fullname,
        name: "fullname",
        email,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })







    return NextResponse.json(
      {
        fullname,
        email,
        "hola":prisma,
      },
      { status: 201 }
    )


    return NextResponse.json(
      {
        fullname,
        email,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt
      },
      { status: 201 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}
