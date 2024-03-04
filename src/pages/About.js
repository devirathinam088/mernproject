import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:200px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
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
          src="https://t4.ftcdn.net/jpg/01/27/16/25/360_F_127162573_kcES41FWV2OOdI5GxdD4di6l4O8o0AZb.jpg"
          />
        <Typography variant="h4">Welcome To Virtual Art Gallery</Typography>
        <p>
         At Virtual art Gallery , we transcend physical boundaries to curate an immersive, boundary-breaking experience in the realm of art. 
         As a pioneering virtual art gallery, we merge the traditional essence of art with the limitless possibilities of technology, creating a
          platform that celebrates creativity, innovation, and the beauty of artistic expression.Online Art Gallery allows people with art and 
          artists all over the world to showcase a large selection of paintings, drawings, prints, digital art, 
          sculpture and photography. This website also provides artists with a curated environment in which to exhibit and sell their work.
          The purpose of the Virtual Art Gallery is to allow prospective customers the ability to sell and purchase
           Art. The Online Art Gallery also contains special functionality that is not viewed in many other Art
          Gallery websites. The ability to extract a color specific to the pixels of the image uploaded by the
           customer.

          </p>
        <br />

      </Box>
    </Layout>
  );
};

export default About;
