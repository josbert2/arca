import Image from 'next/image'

import Header from '@/components/Header'
import Kpis from '@/components/Kpis'

export default function Home() {
  return (
    <main className="flex min-h-screen ">
         <Kpis /> 
    </main>
  )
}
