import React from 'react'
import ImageCard from "./ImageCard"

export default{
    title:"organisms/ImageCard"
}

const Template = (args) => <ImageCard {...args}/>;

export const BookCard = Template.bind({})

BookCard.args=
{
    imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uZC7fj1FCHG7x6OjFyYdSLqXgNYWnhs-Lw&usqp=CAU",
    title:"Beyond Entrepreneurship 2.0",
    author:"Jim Collins and Bill Lazier",
    readtime:"15",
    totalreads:""
}