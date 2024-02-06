import { cn} from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'

const buttonVariance = cva(
    "rounded-sm text-center inline-flex items-center justify-center transition-all duration-200 ease-in gap-sm text-base font-600 z-10 leading-1.2 disabled:pointer-events-none disabled:!bg-backgroundV5 disabled:!border-borderV1 disabled:opacity-50",
    {
        variants: {
            variant: {
                "fill": "bg-theme border border-theme text-white",
                "ghost": "!p-0",
            },
            size: {
                default:"py-[18px] px-8",
                sm:"py-[14px] px-6 text-sm"
            }
        },
        defaultVariants: {
            variant: "fill",
            size: "default"
        }
    }
)

const Button = ({ children, className, variant, size ,disabled,...props}) => {
    return (
        <button {...props} className={cn(buttonVariance({ variant, size, className }))} disabled={disabled}>
            {children}
        </button>
    )
}

export { Button, buttonVariance }