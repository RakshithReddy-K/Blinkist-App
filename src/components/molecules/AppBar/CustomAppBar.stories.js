
import React from 'react'
import CustomAppBar from './CustomAppBar'

export default {
    title:"molecules/CustomAppBar"
}

const Template=(args)=><CustomAppBar {...args}/>

export const Basic = Template.bind({})

Basic.args=
{
    position:"static",
    color:"transparent"
}