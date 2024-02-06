import MasterLayoutHeader from '@/components/layouts/MasterLayoutHeader'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='master-layout min-h-screen bg-backgroundV1'>
         <MasterLayoutHeader/>
         <main className='master-layout-main'>
              <div className="page-wrapper">
                   {children}
              </div>
         </main>
    </div>
  )
}

export default layout