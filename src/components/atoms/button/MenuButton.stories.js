import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuButton from './MenuButton';

export default {
    title: 'atoms/MenuButton'
};

const Template = (args) => <MenuButton {...args} />;

export const Primary = Template.bind({});

Primary.args={
    name:"Science"
}


