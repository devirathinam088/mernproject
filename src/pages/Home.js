import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
// import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
const Banner = "https://artgallery.yale.edu/sites/default/files/styles/hero_small/public/2023-01/ag-doc-2201-0001-pub.jpg?h=589f04c2&itok=5ItkOKKN";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 className="highlightedH1">Virtual Art Gallery Website</h1>
          <p className="highlightedP"> Explore Infinite Creativity in a Virtual Canvas!!!</p>
          {/* <Link to="/admin">ADMIN</Link>  */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

