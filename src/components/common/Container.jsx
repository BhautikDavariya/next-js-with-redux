import { cn} from '@/lib/utils'
import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={cn('container',className)}>
         {children}
    </div>
  )
}

export default Container