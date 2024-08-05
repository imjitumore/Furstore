  import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Arrial } from "./components/Arrial";
import { Products } from "./components/Products";
import { Testimonil } from "./components/Testimonil";
import { News } from "./components/News";
import { Footer } from "./components/Footer";
import { Collections } from "./components/Collections";
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsDetails } from "./components/ProductsDetails";
import { ContactUs } from "./components/ContactUs";
import { Blog } from "./components/Blog";



function App() {

  const[data,setData]=useState([])

  fetch("Data.json").then((response)=>{
    return response.json()
  }).then((result)=>{
    setData(result)
  })

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections data={data} />} />
        <Route path="/productsdetails/:name" element={<ProductsDetails data={data} />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
