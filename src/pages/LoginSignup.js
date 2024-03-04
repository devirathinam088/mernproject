// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useState } from 'react';


// function Copyright(props) {
//   const[state,setState]= useState("Login");
//   const login= async()=>{
//     console.log("Login Executed");
//   }
//   const signup= async()=>{
//     console.log("Signup Executed");
//   }
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignInSide() {
 
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
   
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             backgroundImage:'url(https://img.freepik.com/free-photo/top-view-desk-concept-with-paint-copy-space_23-2148696976.jpg?size=626&ext=jpg&ga=GA1.1.1502153367.1702354501&semt=ais)',
//             marginTop: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             borderRadius: '30px',
//             padding:'50px'
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//           Login
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 ,fontFamily:'initial'}}
//             onClick={()=>{state==="Login"?SignInSide():signup()}}
//             >
//               LOGIN
//             </Button>
//             <Grid container>
//               <Grid item s>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <br/>
//               <Grid item>
//                 <Link href="/signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//                 <br></br>
//                 <Link href="/dashboard" variant="body2" >
//                   Admin
//                 </Link>
//                 <br></br>
//                 <Link href="/dash" variant="body2" >
//                   Artist
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
   
//   );
// }


import React from 'react';
import './LoginSignup.css'
import { useState } from 'react';
// import Header from '../components/Layout/Header';
// import Footer from '../components/Layout/Footer';
const LoginSignup = ()=>{
  
  const[state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
 
const changeHandler = (e) =>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

  const login = async()=>{
     console.log("Login function executed",formData);
     let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/arts");
    }
    else{
      alert(responseData.errors);
    }
  }
  const signup = async()=>{
    console.log("Sign Up function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/arts");
    }
    else{
      alert(responseData.errors);
    }
  }
  
  return(
   <>
   {/* <Header/> */}
    <div className='loginsignup'>
         <div className='loginsignup-container'>
           <h1>{state}</h1>
           <div className='loginsignup-fields'> 
            {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name"/>:<></>}
             <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address"/>
             <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password"/>
           </div>
           <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
           {state==="Sign Up"
           ?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span> </p>
           :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span> </p>}
           <div className="loginsignup-agree">
           <input type="checkbox" name='' id=''/>
           <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
         </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}
export default LoginSignup