import "./App.css";
import { Home } from "./components/Home";
import { Collections } from "./components/Collections";
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ProductsDetails} from  "./components/ProductsDetails";
import { ContactUs } from "./components/ContactUs";
import { Blog } from "./components/Blog";
import { BlogDetails } from "./components/BlogDetails";

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
