"use client"
import { useState } from "react"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

function Signup() {
  const [error, setError] = useState()
  const router = useRouter()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const formData = new FormData(event.currentTarget)
      const fullname = formData.get("fullname")
      const email = formData.get("email")
      const password = formData.get("password")
      const signupResponse = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
            fullname,
            email,
            password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false
      })

      console.log(res)

     // if (res?.ok) return router.push("/dashboard/profile")
    } catch (error) {
      console.log(error)
        setError(error)
    }
  }

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-950 px-8 py-10 w-3/12"
      >
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1 className="text-4xl font-bold mb-7">Signup</h1>

        <label className="text-slate-300">Fullname:</label>
        <input
          type="text"
          placeholder="Fullname"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          name="fullname"
        />

        <label className="text-slate-300">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          name="email"
        />

        <label className="text-slate-300">Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          name="password"
        />

        <button className="bg-blue-500 text-white px-4 py-2 block w-full mt-4">
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup
