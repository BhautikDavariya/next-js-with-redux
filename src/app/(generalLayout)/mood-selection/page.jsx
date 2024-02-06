"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Controller, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Container from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariance } from '@/components/ui/Button';
import IconForwardArrow from '@/components/svg/IconForwardArrow';
const Page = () => {
    const [emojiSwiper, setEmojiSwiper] = useState(null);
    const [textSwiper, setTextSwiper] = useState(null);
    const [bgSwiper, setBgSwiper] = useState(null);
    const [mainSwiper, setmainSwiper] = useState(null);
    const [activeSlide, setActiveSlide] = useState(null);

    useEffect(() => {
        mainSwiper?.slideTo(activeSlide - 1);
    }, [activeSlide])

    return (
        <section className='mood-selection-section section-gap !pt-0'>
            <div className="section-content">
                <div className="selected-mood-slider-content w-full h-[420px] md:h-[520px] mx-auto relative z-10">
                    <div className="gradiant-bottom-shad absolute bottom-0 start-0 end-0 z-[1] h-full dark:bg-banner-dark-v2 bg-banner-light-v2"></div>
                    <div className="flex items-center flex-col">
                        <div className="flex items-center justify-center gap-10 flex-col absolute top-[53%] start-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="w-[74px] h-[74px] flex items-center justify-center ">
                                <Swiper
                                    modules={[Controller]}
                                    onSwiper={setEmojiSwiper}
                                    controller={{ control: emojiSwiper }}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    draggable={false}
                                    allowTouchMove={false}
                                    direction={'vertical'}
                                    className='w-full h-full'
                                >
                                    <SwiperSlide>
                                        <div className="icon-wrapper">
                                            <Image src={"/assets/images/excited.png"} alt='emoji' width={284} height={284} className='max-w-[72px]' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icon-wrapper">
                                            <Image src={"/assets/images/happy.png"} alt='emoji' width={284} height={284} className='max-w-[72px]' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icon-wrapper">
                                            <Image src={"/assets/images/calm.png"} alt='emoji' width={284} height={284} className='max-w-[72px]' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icon-wrapper">
                                            <Image src={"/assets/images/tired.png"} alt='emoji' width={284} height={284} className='max-w-[72px]' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icon-wrapper">
                                            <Image src={"/assets/images/stressed.png"} alt='emoji' width={284} height={284} className='max-w-[72px]' />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-4 max-w-[320px] mx-auto">
                                <h4 className='text-base text-textV1 font-600 text-center'>How are you feeling, today?</h4>
                                <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[Controller]}
                                        onSwiper={setTextSwiper}
                                        controller={{ control: textSwiper }}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        draggable={false}
                                        allowTouchMove={false}
                                        direction={'vertical'}
                                        className='h-[56px]'
                                    >
                                        <SwiperSlide>
                                            <h3 className='text-textV1 font-700 text-5xl text-center'> Excited</h3>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <h3 className='text-textV1 font-700 text-5xl text-center'> Happy</h3>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <h3 className='text-textV1 font-700 text-5xl text-center'> Calm</h3>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <h3 className='text-textV1 font-700 text-5xl text-center'> Tired</h3>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <h3 className='text-textV1 font-700 text-5xl text-center'> Stressed</h3>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="colors-slider h-full w-full absolute bottom-0 left-0 -z-[1]">
                            <Swiper
                                modules={[Controller, EffectFade]}
                                onSwiper={setBgSwiper}
                                controller={{ control: bgSwiper }}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                effect={'fade'}
                                draggable={false}
                                allowTouchMove={false}
                                direction={'vertical'}
                                className='h-full w-full'
                            >
                                <SwiperSlide>
                                    <div className="w-full h-full bg-golden-grad">
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-full h-full bg-green-grad">
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-full h-full bg-blue-grad">
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-full h-full bg-purple-grad">
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-full h-full bg-danger-grad">
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="mood-selection-slider section-gap">
                    <Container>
                        <div className="max-w-[450px] w-full mx-auto relative">
                            <Swiper
                                modules={[Controller]}
                                onSwiper={setmainSwiper}
                                controller={{ control: [emojiSwiper, textSwiper, bgSwiper] }}
                                slidesPerView={5}
                                slidesPerGroupSkip={1}
                                grabCursor={true}
                                keyboard={{
                                  enabled: true,
                                }}
                                spaceBetween={8}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    420: {
                                        slidesPerView: 6,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="mySwiper centerSwiper"
                            >
                                <SwiperSlide onClick={() => setActiveSlide(1)} className='cursor-pointer'>
                                    <div className="emoji-wrapper w-full h-16 border-green-500 border rounded-[18px] flex items-center justify-center">
                                        <Image src={"/assets/images/excited.png"} alt='emoji' width={284} height={284} className='max-w-[32px] xxs:max-w-[40px]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide onClick={() => setActiveSlide(2)} className='cursor-pointer'>
                                    <div className="emoji-wrapper w-full h-16 border-green-500 border rounded-[18px] flex items-center justify-center bg-green-grad2">
                                        <Image src={"/assets/images/happy.png"} alt='emoji' width={284} height={284} className='max-w-[32px] xxs:max-w-[40px]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide onClick={() => setActiveSlide(3)} className='cursor-pointer'>
                                    <div className="emoji-wrapper w-full h-16 border-green-500 border rounded-[18px] flex items-center justify-center bg-blue-grad2">
                                        <Image src={"/assets/images/calm.png"} alt='emoji' width={284} height={284} className='max-w-[32px] xxs:max-w-[40px]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide onClick={() => setActiveSlide(4)} className='cursor-pointer'>
                                    <div className="emoji-wrapper w-full h-16 border-green-500 border rounded-[18px] flex items-center justify-center bg-purple-grad2">
                                        <Image src={"/assets/images/tired.png"} alt='emoji' width={284} height={284} className='max-w-[32px] xxs:max-w-[40px]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide onClick={() => setActiveSlide(5)} className='cursor-pointer'>
                                    <div className="emoji-wrapper w-full h-16 border-green-500 border rounded-[18px] flex items-center justify-center bg-red-grad2">
                                        <Image src={"/assets/images/stressed.png"} alt='emoji' width={284} height={284} className='max-w-[32px] xxs:max-w-[40px]' />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="xxs:w-[88px] xxs:h-[88px] w-[80px] h-[80px] border-borderV2 rounded-md border-4 absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 left-0">

                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="section-action text-center">
                <Container>
                    <Link href={"/choose-craving"} className={cn(buttonVariance({ className: "xs:w-auto w-full xs:inline-block hidden" }))}>
                        Proceed to choose craving
                    </Link>
                    <Link href={"/choose-craving"} className={cn(buttonVariance({ className: "w-[72px] h-[72px] rounded-full p-0 xs:hidden flex ms-auto" }))}>
                      <IconForwardArrow className="w-6 h-6 text-white"/>
                    </Link>
                </Container>
            </div>
        </section>
    )
}

export default Page;