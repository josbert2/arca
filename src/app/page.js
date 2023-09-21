import Image from 'next/image'

import Header from '@/components/Header'
import Kpis from '@/components/Kpis'
import NameUser from '@/components/NameUser'


export default function Home() {
  return (
    <main className="min-h-screen " >
        <div class="pt-10 px-10">
          <NameUser />
          <Kpis /> 
        </div>
    </main>
  )
}
