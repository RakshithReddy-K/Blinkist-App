
import React, {  useState } from 'react';
import { AppBar, Container, makeStyles, Toolbar } from '@material-ui/core';
import SearchIcon from '../../atoms/search/Search';
import TabButton from '../../atoms/button/TabButton';
import Library from '../Library/Library';
import FormDialog from '../FormDialog/FormDialog';
import axios from 'axios';
import ExploreMenu from '../exploremenu/ExploreMenu';
import Explore from '../explore/Explore';
import SearchBar from '../../atoms/search/SearchBar';
import Account from '../../molecules/account/Account';
import Profile from '../profile';
import { useAuth0 } from '@auth0/auth0-react';
import logoimg from './blinkist.jpg'


const useStyles = makeStyles({
  root: {
		backgroundColor: "white",
		color: "black",
		display: "inline-flex",
	},
	accountStyle: {
		float: "right",
		marginTop: "0%",
		marginRight: "0%",
    marginLeft:'6%'
	},
})
function TopNav(props)
{
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [library,setLibrary]=useState(true);
  const [explore,setExplore]=useState(false);
  const [searchValue,setSearchValue]=useState("");
  const [search,setSearch]=useState(false)
  const [category,setCategory]=useState("")
  const [profile,setProfile]=useState(false)
  const { user, isAuthenticated, isLoading  } = useAuth0();
  console.log("In profile",user,isAuthenticated,isLoading)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleExplore=(category)=>
  {
    console.log(category)
    setProfile(false)
    setLibrary(false)
    setExplore(true)
    setCategory(category)
  }
  const handleForm =(title,author,time,category,image)=>{
    console.log(title,author,time,category)
    // eslint-disable-next-line
    // eslint-disable-next-line no-lone-blocks
    {
      var book={
        "title": title,
        "author": author,
        "time": time,
        "category": category,
        "imageurl": image,
        "completed":false,
        "status": false
      }
      console.log(book)
      axios({
              method: 'post',
              url: 'http://localhost:8080/books',
              data: book
          })
          .then(res => console.log({ books: res.data }));
  }
    setOpen(false)
    window.location.reload()
  }

  const handleSearch=()=>
  {
    setSearch(!search)
  }

  const handleSearchValue=(val)=>
  {
    console.log("On change :",val)
    
    setSearchValue(val)
    setLibrary(false)
    setExplore(true)

  }
  const handleLibrary=()=>
  {
    console.log("Handling Library")
    setProfile(false)
    setExplore(false)
    setLibrary(true);
  }
  const handleProfile=()=>
  {
    console.log("Handling profile")
    setLibrary(false)
    setProfile(true)
  }

    return(
      <div>
            <AppBar position="static" className={classes.root} elevation={0}> 
            
            <Toolbar>
            <img src={logoimg} alt="Blinkist"/>
    <SearchIcon onClick={handleSearch}/>

     
    {!search && <ExploreMenu onClick={handleExplore}/>}
    {isAuthenticated && !search && <TabButton name="My Library" onClick={handleLibrary}/>}
    {isAuthenticated && !search && <TabButton  name="Add Book" onClick={handleClickOpen}/>}
    
    {search===true && <SearchBar  onChange={handleSearchValue}/>}
    <div className={classes.accountStyle}>
				{<Account onProfile={handleProfile}/>}
			</div> 
     </Toolbar>
    
    <FormDialog open={open} onSubmit={handleForm} onClose={handleClose}/>
    </AppBar>

    <Container maxWidth='md'>
      <div>
        {profile && <div><br/><br/><Profile/></div> }
        {isAuthenticated && library && <Library />}
        {explore  && searchValue==="" && <Explore category={category} search={searchValue}/>}
        {explore && searchValue!=="" && <Explore category="all" search={searchValue}/>}
      </div>
     </Container>
  </div>
    )
}

export default TopNav