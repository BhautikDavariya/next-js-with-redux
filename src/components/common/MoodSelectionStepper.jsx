import React from 'react'
import Container from './Container'
import { Button } from '../ui/Button'
import IconGoBack from '../svg/IconGoBack'
import IconCancel from '../svg/IconCancel'

const MoodSelectionStepper = () => {
    return (
        <div className="py-4 relative z-40">
            <Container>
                <div className="max-w-[60%] mx-auto">
                    <div className='flex items-center'>
                        <Button variant={"ghost"} className="w-10 h-10 flex-shrink-0 bg-backgroundV4 rounded-full">
                            <IconGoBack className="w-4 h-4 text-textV1" />
                        </Button>
                        <div className="w-full h-1 bg-white flex-grow"></div>
                        <Button variant={"ghost"} className="w-10 h-10 flex-shrink-0 bg-backgroundV4 rounded-full">
                            <IconCancel className="w-3.5 h-3.5 text-textV1" />
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MoodSelectionStepper