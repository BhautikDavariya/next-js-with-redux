import React from 'react'
import Container from '../common/Container'
import ThemeToogle from '../ui/ThemeToogle'

const GeneralLayoutHeader = () => {
  return (
    <header className='w-full fixed top-0 start-0 left-0 z-40 py-4 dark:bg-black/20 bg-white/20 backdrop-blur-sm'>
         <Container>
              <div className="header-wrapper flex flex-row-reverse">
                   <div className="logo-part">
                     
                   </div>
                   <div className="action-part">
                       <ThemeToogle/>
                   </div>
              </div>
         </Container>
    </header>
  )
}

export default GeneralLayoutHeader