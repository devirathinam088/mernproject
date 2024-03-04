// import React from "react";
// import { MenuList } from "../data/data";
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { Button } from '@mui/material';
// import {
//   Box,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
// } from "@mui/material";
// import { NavLink } from "react-router-dom";
// const Menu = () => {
//   return (
//     <div>
//     <AppBar position="static" sx={{backgroundColor:"#0F0F0F"}}>
//     <Toolbar>
      
//       <Typography
//         variant="h6"
//         noWrap
//         component="div"
//         sx={{ display: { xs: 'none', sm: 'block' } }}
//       >
//         Virtual Art Gallery
//       </Typography>
   
//       <Box sx={{ flexGrow: 1 }} />
//       <a href="/arts"><Button style={{backgroundColor:'black'}} variant="contained" >
//           arts
//         </Button> </a>
        
// <a href="/profile1"><Button style={{backgroundColor:'black'}} variant="contained" >
//           Profile
//         </Button> </a>
//         <a>
//              {localStorage.getItem('auth-token')
//             ?<button style={{color: 'white',
//             backgroundColor: 'black',}} onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>LOGOUT</button>
//             :<NavLink to={"/signin"}>LOGIN</NavLink>}
          
//         </a>
//     </Toolbar>
//   </AppBar>

//     <div>
//       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {MenuList.map((menu) => (
//           <Card sx={{ maxWidth: "490px", display: "flex", m: 2 }}>
//             <CardActionArea>
//               <CardMedia
//                 sx={{ minHeight: "400px" }}
//                 component={"img"}
//                 src={menu.image}
//                 alt={menu.name}
//               />
//               <CardContent>
//                 <Typography variant="h5" gutterBottom component={"div"}>
//                   {menu.name}
//                 </Typography>
//                 <Typography variant="body2">{menu.description}</Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         ))}
//       </Box>
//       </div>
//       </div>
//   );
// };

// export default Menu;



import React, { useState, useEffect } from "react";
import { MenuList } from "../data/data";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Menu = () => {
  // Step 1: Create state variable for menu data
  const [menuData, setMenuData] = useState([]);
  // Step 2: Use the useEffect hook for data fetching
  useEffect(() => {
    // Step 3: Perform data fetching
    const fetchData = async () => {
      try {
        // Replace 'your_backend_api_endpoint' with the actual endpoint
        const response = await fetch('http://localhost:4000/allproducts');
        const data = await response.json();

        // Step 4: Update state variable with fetched data
        setMenuData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } ;

    // Call the fetchData function
    fetchData();
   // The empty dependency array ensures that the effect runs only once when the component mounts

  }, []);
   



  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#0F0F0F" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Virtual Art Gallery
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          {/* <a href="/arts">
            <Button style={{ backgroundColor: 'black' }} variant="contained">
              arts
            </Button>
          </a> */}

          {/* <a href="/profile1">
            <Button style={{ backgroundColor: 'black' }} variant="contained">
               Profile {user ? `- ${user.name}` : ''}
            </Button>
          </a> */}
          <a>
            {localStorage.getItem('auth-token') ?
              <button style={{ color: 'white', backgroundColor: 'black' }} onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>LOGOUT</button>
              : <NavLink to={"/signin"}>LOGIN</NavLink>}
          </a>
        </Toolbar>
      </AppBar>

      <div>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {/* Step 5: Use menuData instead of MenuList */}
          {menuData.map((menu, index) => (
            <Card key={index} sx={{ maxWidth: "490px", display: "flex", m: 2 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>Author: {menu.authorname}</Typography>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>Price: ${menu.price}</Typography>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>Category: {menu.category}</Typography>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>Description: {menu.description}</Typography>
              
                 

                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Menu;



