import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  root: {                           
      '& .MuiOutlinedInput-root': {  
          '&.Mui-focused fieldset': { 
              borderColor: '#22c870',
          },
      },
  },
  margin:{
    marginLeft:10,
    marginBottom:20
  }
})

export default function InputField({error,helperText,label,value,onChange,id}) {
    const classes = useStyles();
    
    return (
      <div className={classes.margin}>
        <TextField data-testid="input-field"  classes={{root:classes.root}} error={error} helperText={helperText} onChange={onChange}  fullWidth={true} value={value} label={label} id={id}  variant="outlined" />
        </div>
     );
  }