import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SimpleButton from '../../atoms/button/SimpleButton';

import {FormControl, InputLabel, makeStyles, MenuItem, Select} from '@material-ui/core';
import InputField from '../../atoms/inputField/InputField';


const useStyles = makeStyles({
  margin:{
    marginRight:13,
  },
  root: {
    width: "98%",
    marginLeft: "2%",
},
})
export default function FormDialog({open,onSubmit,onClose}) {

  const classes = useStyles();
  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")
  const [readTime,setReadTime]=useState("")
  const [category,setCategory]=useState("")
  const [image,setImage]=useState("")
  const [selected, setSelected] = useState(true);
  const [error,setError]=useState(Array(4).fill(false))
  const [helper,setHelper]=useState(Array(4).fill(""))
  const validate=(event)=>
  {
    var val=event.target.value
    var err=error.slice()
    var helpertext=helper.slice()
    var index=event.target.id
    console.log(index)
      if(val==="")
      {
        err[index]=true
        helpertext[index]="Cannot be empty"
      }
      else{
        err[index]=false
        helpertext[index]=""
      }
      setError(err)
      setHelper(helpertext)      
  }
  const validateTitle=(event)=>
  {
      validate(event)
      console.log(event.target.id)
        console.log(error)
      console.log(helper)
      setTitle(event.target.value)
  }
  function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  }
  
 
  const validateImage=(event)=>
  {
    validate(event)
    var helpertxt=helper.slice()
    var err=error.slice()
    if(event.target.value!=="")
    {
    if(!isValidURL(event.target.value))
    {
      err[event.target.id]=true
      helpertxt[event.target.id]="Enter a valid URL "

    }
    else{
      err[event.target.id]=false
      helpertxt[event.target.id]=""
    }
    setError(err)
    setHelper(helpertxt)}
    setImage(event.target.value)
  }
  
  const validateAuthor=(event)=>
  {
    validate(event)

    setAuthor(event.target.value)
  }

  const validateReadTime=(event)=>
  {
    validate(event)
    var time=event.target.value
    var helpertxt=helper.slice()
    var err=error.slice()
    console.log(time)
    if(time!=="")
    {if(isNaN(time))
    {
      err[event.target.id]=true
      helpertxt[event.target.id]="Enter a number "
    }
    else
    {
      err[event.target.id]=false
      helpertxt[event.target.id]=""
    }
    setError(err)
    setHelper(helpertxt)
  }
    
    setReadTime(event.target.value)
  }
  const checkError=()=>
  {
    console.log(error)
    var status=false
    var err=error.slice()
    error.forEach(er=>{
      if(er===true)
      {
        status=true
      }
    })
    if(title==="")
      err[0]=true
    if(author==="")
      err[1]=true
    if(readTime==="")
      err[2]=true
    if(image==="")
      err[3]=true
    if(category==="")
    {
      status=true
      setSelected(false)
    }
    setError(err)
    return status  
   }

  const handleSubmit=()=>
  {
    if(checkError()===false)
    {
    onSubmit(title,author,readTime,category,image)
    }
  }
  
  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" fullWidth
  >
        <DialogTitle id="form-dialog-title"><h2 >ADD BOOK</h2></DialogTitle>
        <DialogContent>
          
          <InputField id="0" value={title} error={error[0]} helperText={helper[0]} onChange={validateTitle} label="Title"/>
          <InputField  id="1" value={author} error={error[1]} helperText={helper[1]} onChange={validateAuthor} label="Author"/>
          <InputField id="2" value={readTime} error={error[2]} helperText={helper[2]} onChange={validateReadTime} label="Readtime"/>

          <InputField id="3" value={image} error={error[3]} helperText={helper[3]} onChange={validateImage} label="Cover Image"/>
          <FormControl variant="outlined" className={classes.root}>
                        <InputLabel id="demo-simple-select-outlined-label">
                            Category
                        </InputLabel>

                        <Select
                        error={!selected}
                            defaultValue=""
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Category"
                            onChange={(event) => {
                                setCategory(event.target.value);
                                setSelected(true);
                            }}
                        >
                            <MenuItem value={"Entrepreneurship"}> Entrepreneurship</MenuItem>
                            <MenuItem value={"Politics"}>Politics</MenuItem>
                            <MenuItem value={"Science"}>Science</MenuItem>
                            <MenuItem value={"Education"}>Education</MenuItem>
                            <MenuItem value={"Economics"}>Economics</MenuItem>
                            <MenuItem value={"Motivation"}>
                                Motivation and inspiration
                            </MenuItem>
                            <MenuItem value={"Health"}>Health and Nutrition</MenuItem>
                            <MenuItem value={"Communcation skills"}>Communication Skills</MenuItem>
                        </Select>
                    </FormControl>
          </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <div className={classes.margin}>
          <SimpleButton  name="Submit" onClick={handleSubmit}/>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
