
import {  Grid,  makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
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
    },
    result:{
        paddingLeft:15        

    }
    }

  ));

export default function Explore({category,search})
{
    const [Books,setBooks]=useState([])
    const [searchedBooks,setSearchedBooks]=useState([])
    const [searchVal,setSearchVal]=useState(search)
   
    console.log("In explore ",searchVal)
    
    
    const fetchBooks=()=>
    {
        axios.get('http://localhost:8080/books')
            .then(resp => {
                var data = resp.data;
                console.log(data)
                setBooks(data)
                if(search==="")
                    {setSearchedBooks(data)}
                else
                {searchBooks(data,search);}
                
            })
            .catch(error => {
                console.log(error);
            });    
    }
    useEffect(()=>{console.log("Executing fetch");fetchBooks();},[])
    const searchBooks=(data,searchval)=>
    {
        var temp=[]
        console.log("books",data)
        if(searchval==="")
            temp=data.slice()
        data.forEach(book=>{
            var title=book.title.toUpperCase();
            var author=book.author.toUpperCase();
            var val=searchval.toUpperCase();
            //console.log(searchval)
            if(title.includes(val) || author.includes(val))
            {
                temp.push(book)
            }

        })
        console.log("Searched Books",temp)
        setSearchedBooks(temp)
    }
    if(searchVal!==search)
    {
        setSearchVal(search)
        searchBooks(Books,search)
    }
    
  //  searchBooks(Books,search)
    const handleStatus=(id)=>
    {
      console.log("Marked as completed "+id);
      const len=Books.length
      const temp=Books.slice()
      for(var i=0;i<len;i++)
      {
          if(temp[i].id===id)
        {
            temp[i].status=true;
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

    console.log(searchedBooks)
    const classes=useStyles()
    return(
        <div >
            <div className={classes.header}>
            <h1>Explore</h1>
            </div>
            {searchedBooks.length===0 && <div className={classes.result}><h2>No Results!!!!!!!</h2></div>}
            <div className={classes.imagegrid}>
            <Grid container spacing={2}>

            {searchedBooks.map((book)=>( (book.category===category || category==="all") &&
            <Grid item xs={12} md={4} sm={6} key={book.id}>
            {book.status===false &&
            <ImageCard btnlabel= "Add To Library" key={book.id} id={book.id} title={book.title} imageurl={book.imageurl} time={book.time} author={book.author} onClick={handleStatus}/>
            }
            {book.status===true &&
            <ImageCard btnlabel= "" key={book.id} id={book.id} title={book.title} imageurl={book.imageurl} time={book.time} author={book.author} onClick={handleStatus}/>
            }
            </Grid>
            )
        )}
            </Grid>
            </div>
        </div>
    )

}