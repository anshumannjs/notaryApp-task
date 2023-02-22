import React from 'react'
import {Stepper, Step, StepLabel} from '@mui/material'

export default function MultiSteeper(props) {
  return (
    <div className='w-full'>
        <Stepper activeStep={props.active}>
            <Step>
                <StepLabel>1</StepLabel>
            </Step>
            <Step>
                <StepLabel>2</StepLabel>
            </Step>
            <Step>
                <StepLabel>3</StepLabel>
            </Step>
        </Stepper>
    </div>
  )
}
