import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Account from './Account';
export default
{
    title:"atoms/Account"
}

const Template = (args) => <Account {...args} />

export const Basic = Template.bind({}) 

Account.args=
{}