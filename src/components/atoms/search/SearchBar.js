import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {                           
        '& .MuiFormHelperText-root': {  
            '&.Mui-focused fieldset': { 
                borderColor: '#22c870',
            },
        },
    },
  })

export default function SearchBar({onChange}) {
  const classes = useStyles();
  const [search,setSearch]=useState("")
  const handleSearch=(event)=>
  {
      setSearch(event.target.value)
      onChange(event.target.value)

  }

  return (
  
      
        <TextField data-testid='search-bar' classes={classes} value={search} fullWidth={true} id="standard-search" onChange={handleSearch} 
        placeholder="Search for authors and titles" type="search"  />
      
)
  }


