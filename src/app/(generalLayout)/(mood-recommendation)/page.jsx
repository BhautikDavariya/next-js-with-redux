'use client'
import Container from '@/components/common/Container'
import { buttonVariance } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { getPosts } from '@/redux/actions/postActionType'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const dispatch = useDispatch();
    const { users, posts } = useSelector(state => state)
    const handleIncrement = () => {
        dispatch(getPosts())
    };

    useEffect(() => {
        console.log('data', users, posts)
    }, [users])

    return (
        <>
            <section className='banner-section z-10 h-[420px] md:h-[480px] py-14 md:py-20 w-full  bg-[url("/assets/images/banner-img2.jpg")] sm:bg-transparent bg-black/40 bg-blend-overlay sm:bg-[url("/assets/images/banner-img1.jpg")] bg-center bg-cover relative before:w-full before:h-full before:absolute before:-bottom-1 before:start-0 before:dark:bg-banner-dark before:bg-banner before:-z-[1]'>
                <Container className="h-full">
                    <div className="h-full flex items-end justify-center">
                        <Image src="/assets/images/Logo.svg" alt='mood-recommandation-icon' width={250} height={81} className='max-w-[180px] sm:max-w-full dark:block hidden' />
                        <Image src="/assets/images/Logo-dark.svg" alt='mood-recommandation-icon' width={250} height={81} className='max-w-[180px] sm:max-w-full block dark:hidden' />
                    </div>
                </Container>
            </section>
            <section className='mood-selection-cards-section section-gap'>
                <Container className="h-full">
                    <div className="section-content">
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-10 md:max-w-[80%] xl:max-w-[60%] w-full mx-auto mb-10">
                            <div className="w-full p-5 xxs:p-6 sm:p-8 md:py-10 md:px-10 border flex items-center gap-4 md:gap-8 relative z-10 flex-col justify-center border-borderV1 rounded-sm bg-backgroundV2">
                                <div className="">
                                    <div className="numaric-value-wrapper absolute top-0 sm:-top-3  lg:top-1/2 lg:-translate-y-1/2 start-4 xxs:start-6 -z-[1]">
                                        <h2 className='text-[72px] sm:text-[100px] md:text-[125px] lg:text-[200px] font-800 dark:text-[#1f1f1f] text-[#e2e2e2]'>1</h2>
                                    </div>
                                    <div className="icon-wrapper ">
                                        <Image src="/assets/images/mood-recomandation-icn-1.png" alt='mood-recommandation-icon' width={250} height={240} className='max-w-[60px] md:max-w-[80px]' />
                                    </div>
                                </div>
                                <h3 className='text-xs xxs:text-base sm:text-lg md:text-xl font-500 text-center text-textV1'>Tell us how you are feeling today</h3>
                            </div>
                            <div className="w-full p-5 xxs:p-6 sm:p-8 md:py-10 md:px-10 border flex items-center gap-4 md:gap-8 relative z-10 flex-col justify-center border-borderV1 rounded-sm bg-backgroundV2">
                                <div className="">
                                    <div className="numaric-value-wrapper absolute top-0 sm:-top-3  lg:top-1/2 lg:-translate-y-1/2 start-4 xxs:start-6 -z-[1]">
                                        <h2 className='text-[72px] sm:text-[100px] md:text-[125px] lg:text-[200px] font-800 dark:text-[#1f1f1f] text-[#e2e2e2]'>2</h2>
                                    </div>
                                    <div className="icon-wrapper ">
                                        <Image src="/assets/images/mood-recomandation-icn-2.png" alt='mood-recommandation-icon' width={250} height={240} className='max-w-[60px] md:max-w-[80px]' />
                                    </div>
                                </div>
                                <h3 className='text-xs xxs:text-base sm:text-lg md:text-xl font-500 text-center text-textV1'>And watch the magic unfold</h3>
                            </div>
                        </div>
                        <div className="section-action text-center">
                            <Link href={"/mood-selection"} className={cn(buttonVariance({ className: "xs:w-auto w-full" }))}>
                                Proceed to mood selection
                            </Link>
                            <button onClick={() => handleIncrement()} >increment</button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default page