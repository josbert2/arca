'use client'
import React from 'react'
import { Badge } from '@/components/ui/Badge'
import SvgMoney from './Icons/SvgMoney'

export default function Kpis() {
    //https://dribbble.com/shots/21656734-Orelypay-Finance-Management-Dashboard
  return (
    

    <div class="flex w-full ">
        <div class="grid grid-cols-3 gap-5 w-full place-content-start">
            <div class="bg-[#DEB5FF] rounded-[14px] px-5 py-3 w-full relative">
                <div class="py-3 flex  flex-col items-start w-full">
                    <h2 class="text-xs font-bold w-full flex items-center">
                        Total balance
                        <div class="">
                            <Badge className="ml-2 font-light rounded-full"> 5.50%</Badge>
                        </div>
                     </h2>
                     <div class=" text-2xl pt-5 font-bold">
                        $20.123.00
                     </div>
                </div>
                <div class="absolute top-0 right-0">
                    <div class="w-20 h-40">
                        <SvgMoney />
                    </div>
                </div>
            </div>
            <div class="bg-[#FDB9F4] rounded-lg px-3 py-3 w-full relative">
                <div class="py-3 flex  flex-col items-start w-full">
                    <h2 class="text-xs font-bold w-full flex items-center">
                        Total balance
                        <div class="">
                            <Badge className="ml-2 font-light rounded-full"> 5.50%</Badge>
                        </div>
                     </h2>
                     <div class=" text-2xl pt-5 font-bold">
                        $20.123.00
                     </div>
                </div>
                <div class="absolute top-0 right-0">
                    <div class="w-20 h-40">
                        <SvgMoney />
                    </div>
                </div>
            </div>
            <div class="bg-[#FFF] rounded-lg px-3 py-3 w-full relative border">
                <div class="py-3 flex  flex-col items-start w-full">
                    <h2 class="text-xs font-bold w-full flex items-center">
                        Total balance
                        <div class="">
                            <Badge className="ml-2 font-light rounded-full"> 5.50%</Badge>
                        </div>
                     </h2>
                     <div class=" text-2xl pt-5 font-bold">
                        $20.123.00
                     </div>
                </div>
                <div class="absolute top-0 right-0">
                    <div class="w-20 h-40">
                        <SvgMoney />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
