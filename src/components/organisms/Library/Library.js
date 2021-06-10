
import {  Grid,  makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import LibraryTabs from '../../molecules/AppBar/LibraryTabs.js/LibraryTabs';
import ImageCard from '../ImageCard/ImageCard';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
   
    header:
    {
        paddingTop:40,
        paddingBottom:20,
        paddingLeft:15
    },
    tabs:{
        paddingTop:20,
        paddingBottom:40,
        paddingLeft:15

    },
    imagegrid:
    {
        paddingLeft:15
    }
    }
  ));

export default function Library()
{
    const [Books,setBooks]=useState([])
    const [value,setValue]=useState(0)
    const fetchBooks=()=>
    {
        axios.get('http://localhost:8080/books')
            .then(resp => {
                var data = resp.data;
                console.log(data)
                setBooks(data)
            })
            .catch(error => {
                console.log(error);
            });    
    }
    useEffect(()=>{fetchBooks()},[])
   
    
    const handleCompleted=(id)=>
    {
      console.log("Marked as completed "+id);
      const len=Books.length
      const temp=Books.slice()
      for(var i=0;i<len;i++)
      {
          if(temp[i].id===id)
        {
            temp[i].completed=(!temp[i].completed);
            var book={
                "imageurl":temp[i].imageurl,
                "title":temp[i].title,
                "author":temp[i].author,
                "time":temp[i].time,
                "category":temp[i].category,
                "completed":temp[i].completed,
                "status":temp[i].status
            }
            axios.put('http://localhost:8080/books/'+id,book)
            console.log("Editing in json file as well");
            break
        }
      }
      setBooks(temp);

    }

  
    const handleTabs=(event,val)=>
    {
        console.log(val)
        setValue(val)
    }
    const classes=useStyles()
    return(
        <div >
            <div className={classes.header}>
            <h1>My Library</h1>
            </div>
            <div className={classes.tabs}>
            <LibraryTabs onChange={handleTabs} value={value}/>
            </div>
            <div className={classes.imagegrid}>
            <Grid container spacing={2}>

            {Books.map((book)=>(book.completed===false && value===0 && book.status===true &&
            <Grid item xs={12} md={4} sm={6} key={book.id}>
            <ImageCard btnlabel="Mark As Completed" key={book.id} id={book.id} title={book.title} imageurl={book.imageurl} time={book.time} author={book.author} onClick={handleCompleted}/>
           
            </Grid>
            )
        )}
                    {Books.map((book)=>(book.completed===true && value===1 && book.status===true &&
            <Grid item xs={12} md={4} sm={6} key={book.id}>
            <ImageCard btnlabel="Re-Visit" key={book.id} id={book.id} 
            title={book.title} imageurl={book.imageurl} time={book.time} author={book.author} onClick={handleCompleted} />
           
            </Grid>
            )
        )}
            </Grid>
            </div>
        </div>
    )

}