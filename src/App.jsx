  import reactLogo from "../imjitumore/Furstore/assets/react.svg";
import viteLogo from "../imjitumore/Furstore/vite.svg";
import "../imjitumore/Furstore./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Navbar } from "../imjitumore/Furstore/components/Navbar";
import { Home } from "../imjitumore/Furstore/components/Home";
import { Arrial, Arrial_card } from "../imjitumore/Furstore/components/Arrial";
import { Products } from "../imjitumore/Furstore/components/Products";
import { Testimonil } from "../imjitumore/Furstore/components/Testimonil";
import { News } from "../imjitumore/Furstore/components/News";
import { Footer } from "../imjitumore/Furstore/components/Footer";
import { Collections } from "../imjitumore/Furstore/components/Collections";
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ProductsDetails} from  "../imjitumore/Furstore/components/ProductsDetails";
import { ContactUs } from "../imjitumore/Furstore/components/ContactUs";
import { Blog } from "../imjitumore/Furstore/components/Blog";
import { BlogDetails } from "../imjitumore/Furstore/components/BlogDetails";
import { Testing } from "../imjitumore/Furstore/components/Testing";

function App() {

  const[data,setData]=useState([])
  const[blog,setBlog]=useState([])

  useEffect(()=>{
    fetch("./Data.json").then((response)=>{
      return response.json()
    }).then((result)=>{
      setData(result)
    })
  
    fetch("./News.json").then((response)=>{
      return response.json()
    }).then((result)=>{
      setBlog(result)
    })

  },[blog,data])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections data={data} />} />
        <Route path="/productsdetails/:name" element={<ProductsDetails data={data} />}/>
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/blog" element={<Blog data={blog} />}/>
        <Route path="/blogdetails/:id" element={<BlogDetails data={blog}/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
