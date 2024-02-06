"use client";

import ChooseCravingRadioGroup from '@/components/common/ChooseCravingRadioGroup'
import Container from '@/components/common/Container'
import { Button, buttonVariance } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const page = () => {
    const [selected, setSelected] = useState();
    const router = useRouter()
    const onCravingChange = (selected)=>{
        setSelected(selected)
    }
    console.log(selected)
    return (
        <>
            <section className='craving-section section-gap  flex items-center justify-center relative z-10'>
                <Container>
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-red-grad blur-3xl absolute -z-[1] -top-[120px] start-1/2 -translate-x-1/2 rounded-full"></div>
                    <div className="section-title mb-10">
                        <h2 className='text-2xl sm:text-3xl lg:text-5xl font-700 text-textV1 text-center leading-1.5'>What are you craving for?</h2>
                    </div>
                    <div className="section-content md:max-w-[80%] lg:max-w-[60%] w-full mx-auto mb-10">
                        <div className="choose-craving-radio-group-wrapper">
                            <ChooseCravingRadioGroup selected={selected} onChange={onCravingChange}/>
                        </div>
                    </div>
                    <div className="section-action">
                        <div className="action-part text-center">
                            <Button onClick={()=>router.push("/order")} disabled={!selected} className="xs:w-auto w-full">
                                Let the magic unfold
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default page