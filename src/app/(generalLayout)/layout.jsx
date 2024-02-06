import GeneralLayoutHeader from '@/components/layouts/GeneralLayoutHeader'
import React, { Fragment } from 'react'

const layout = ({ children }) => {
    return (
        <div className='min-h-screen bg-backgroundV1'>
            {/* <GeneralLayoutHeader /> */}
            <main className='general-layout-main'>
                <div className="page-wrapper">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default layout