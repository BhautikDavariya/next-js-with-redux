"use client"
import { RadioGroup } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import IconCancel from '../svg/IconCancel'
import IconRadioActive from '../svg/IconRadioActive'
import IconRadioInactive from '../svg/IconRadioInactive'

const cravings = [
    "A full-fledged meal",
    "Snacks or something small",
    "A mouth-watering dessert",
    "I don't know, surprise me "
]

const ChooseCravingRadioGroup = ({onChange,selected}) => {
    return (
        <RadioGroup value={selected} onChange={onChange} className={"w-full max-w-full"}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="flex flex-col gap-4">
                {cravings.map((craving) => (
                    <RadioGroup.Option
                        key={craving}
                        value={craving}
                        className={({ active, checked }) => `w-full p-6 sm:p-8 bg-backgroundV1 border-borderV1 border rounded-md cursor-pointer  ${checked ? "border-theme" :""}`}
                    >
                        {({ active, checked }) => (
                            <div className="flex items-center justify-between">
                                <RadioGroup.Label
                                    as="h5"
                                    className={`font-500 text-base text-textV1 flex-grow`}
                                >
                                    {craving}
                                </RadioGroup.Label>
                                <span className='flex shrink-0'>
                                    {checked ? <IconRadioActive className="w-6 h-6" /> : <IconRadioInactive className="w-6 h-6" />}
                                </span>
                            </div>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

export default ChooseCravingRadioGroup