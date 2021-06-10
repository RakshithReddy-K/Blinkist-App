
import InputField from "./Input"

 export default
{
    title:"atoms/Input"
}

const Template=(args)=><InputField {...args}/>

export const Basic = Template.bind({})

Basic.args=
{
    label:"Title"
}