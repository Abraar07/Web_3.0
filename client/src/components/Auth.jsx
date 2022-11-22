import React,{ useState,useEffect } from 'react'
import { Avatar,Button,Paper,Grid,Typography,Container, Icon } from '@material-ui/core';
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
//import { GoogleLogin } from "react-google-login";
import  logo  from "../../images/logo.png"
import { useDispatch,useSelector } from "react-redux";
/* import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './Google'; */
import Navbar from "./Navbar";
import '../index.css'
//import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";
//import { Button } from "@material-ui/core";

import GoogleAuth from './GoogleAuth'; 
import Input from './Input';
import useStyles from "./styles"
import { createPost } from '../actions/posts';



const Auth = ({ currentId,setCurrentId }) => {
  const classes  = useStyles();
  const [isSignup,setIsSignup] = useState(false)

  const [postData,setPostData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    cpassword:""
  })
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  //const posts = useSelector((state)=>state.posts)
  console.log(post)

  const dispatch = useDispatch();
  const [showPassword,setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
      e.preventDefault();
      if(currentId)
      dispatch(createPost(postData))
  }

  const handleChange = () => {

  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  }

  const googleSuccess = async (res) =>{
    const result = res?.profileObj;
    const token = res?.tokenId;
    
    try {
      dispatch({ type: "AUTH" , data: { result,token } });
    } catch (error) {
      console.log(error)
    }
  }

  const googleError = (error) => console.log(error);

  return (
    <Container component="main" maxWidth="xs" className='container'> 


      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography  variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {
              isSignup && (
                  <>
                    <Grid item >
                    <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus half value={postData.firstname} onChange={(e) => setPostData({ ...postData, firstname: e.target.value })}/>
                    </Grid>
                    <Grid item>
                    <Input name='lastName' label="Last Name" handleChange={handleChange}  half value={postData.lastname} onChange={(e) => setPostData({ ...postData, lastname: e.target.value })}/>
                    </Grid>
                  </>
              )}
                <Input    name="email" label="Email Address" fullwidth="true" handleChange={handleChange} type="email" value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })}/>
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} value={postData.password} onChange={(e) => setPostData({ ...postData, password: e.target.value })}/>
                { isSignup && <Input name="cpassword" label="Repeat Password" handleChange={handleChange} type="password" value={postData.cpassword} onChange={(e) => setPostData({ ...postData, cpassword: e.target.value })}/> }
          </Grid>
          <Button type="submit" fullwidth variant='contained' color="primary" className={classes.submit} component={Link} to={"/"} >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleAuth />
          {/* <GoogleLogin 
              prompt='consent'value={postData.firstname} onChange={(e) => setPostData({ ...postData, firstname: e.target.value })}
              clientId='283138669990-3pqt4kijmvofdldgdfdpavo448vf4j2a.apps.googleusercontent.com'
              render={(renderProps) => (
                <Button    style = {{width: 365}} className={classes.googleButton} color="primary" fullWidth={true} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained"> Google Sign In</Button>
              )} 
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy={"single_host_origin"}
          /> */}
           {/* <Google /> */}           
          <Grid container justifyContent='flex-end'>
                <Grid item>
                    <Button onClick={switchMode}>
                      {
                        isSignup ? "Already have an Account? Sign In" : "Don't have an Account? Sign Up"
                      }
                    </Button>
                </Grid>
          </Grid>
        </form>
      </Paper>
    </Container> 
  )
}

export default Auth


{/* <GoogleLogin 
              prompt = 'consent'
              clientId='283138669990-5k99m2k4bv8j2hngk3j05ratviautpii.apps.googleusercontent.com'
              render={(renderProps) => (
                <Button    style = {{width: 365}} className={classes.googleButton} color="primary" fullwidth="true" onClick={renderProps.onClick} disabled={renderProps.disabled} startricon={<Icon />} variant="contained"> Google SignIn</Button>
              )} 
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
          /> */}


          {/* <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />; */}