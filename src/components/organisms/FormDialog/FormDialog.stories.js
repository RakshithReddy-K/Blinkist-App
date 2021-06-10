import React from 'react'
import FormDialog from './FormDialog'
export default{
    title:"organisms/FormDialog"
}

const Template=(args)=><FormDialog {...args}/>

export const AddForm = Template.bind({})

AddForm.args={
    open:true
}
