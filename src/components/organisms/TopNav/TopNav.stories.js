
import React from 'react'
import TopNav from './TopNav'

export default {
    title:"organisms/TopNav"
}

const Template=(args)=><TopNav {...args}/>

export const Basic = Template.bind({})

Basic.args=
{
    position:"static",
    color:"transparent"
}