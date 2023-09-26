'use client'


import Kpis from '@/components/Kpis'
import NameUser from '@/components/NameUser'

import { useSession, signOut } from "next-auth/react";




export default function Home() {


  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return { redirect: { destination: "/login", permanent: false } };
    },
  });

  console.log(session, status);
  return (
    <main className="min-h-screen " >
        <div class="pt-10 px-10">
          <NameUser />
          <Kpis /> 
        
        </div>
    </main>
  )
}
