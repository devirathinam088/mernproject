import React from "react";
import Layout from "./../components/Layout/Layout";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
        We value your connection and inquiries. Whether you have questions about our exhibitions, want to collaborate, 
       or simply wish to share your thoughts, we're here and eager to engage with you.
      Get in Touch. We're just a click away! Reach out to us via email. Our team is dedicated to responding promptly and ensuring 
      your experience with Virtual Art Gallery is seamless and enjoyable.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <Box
          component="img"
          sx={{
            height:"100%",
            width:"100%",
            padding:0, 
          }}
          alt="Art Gallery"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtR090K7KIqQV8zvgUOjtA0R1zQjohiBSpQ&usqp=CAU"
          />

        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                <MailIcon sx={{ color: "skyblue" }} /> 
                <span style={{ fontWeight: "bold" , fontSize:"30px"}}>devirathinam088.com</span>
                </TableCell>
              </TableRow>
              {/* <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
