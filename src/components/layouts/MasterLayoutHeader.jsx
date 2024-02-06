import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import ThemeToogle from '../ui/ThemeToogle'

const MasterLayoutHeader = () => {
    return (
        <header className='py-5'>
            <Container>
                <div className="header-wraooer">
                    <div className="logo-part">
                        <Image src="/assets/images/Logo.svg" alt='mood-recommandation-icon' width={250} height={81} className='max-w-[160px] dark:block hidden' />
                        <Image src="/assets/images/Logo-dark.svg" alt='mood-recommandation-icon' width={250} height={81} className='max-w-[160px] block dark:hidden' />
                    </div>
                    <div className="action-part">
                          <ThemeToogle/>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default MasterLayoutHeader