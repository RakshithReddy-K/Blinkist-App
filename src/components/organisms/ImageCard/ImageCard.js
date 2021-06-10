import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SimpleButton from '../../atoms/button/SimpleButton';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 400,
      height:521,
      border:"1px solid #BAC8CE",
    },
    icon:{
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
  },
  btn: {
    marginTop:25,
    maxWidth:400
    
  },
  
  }));
  
  function ImageCard({imageurl,title,author,time,onClick,id,btnlabel}) {
   
    const handleClick=()=>
    {
      onClick(id);
    }
    const classes = useStyles();
    return (
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Img"
            height="350"
            width="400"
            image={imageurl}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" >
            {title}
            </Typography>

            <Typography gutterBottom variant="subtitle1" color="textSecondary">
            {author}
            </Typography>

            <div className={classes.icon}>
               <AccessTimeIcon fontSize="small" />
               <Typography style={{marginLeft:4}} variant="caption"> {time}-minute read</Typography>
               
            </div>
            <br/>
            
          </CardContent>
          {btnlabel!=="" &&
           
          
           <SimpleButton  fullWidth="true" onClick={handleClick} name={btnlabel}/>
          
           }
            
        </CardActionArea>
      </Card>
      
    );
  }

  export default ImageCard