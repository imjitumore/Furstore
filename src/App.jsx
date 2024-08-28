import "./App.css";
import { Home } from "./components/Home";
import { Collections } from "./components/Collections";
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ProductsDetails} from  "./components/ProductsDetails";
import { ContactUs } from "./components/ContactUs";
import { Blog } from "./components/Blog";
import { BlogDetails } from "./components/BlogDetails";
import { Cart } from "./components/Cart";
import { Arrial } from "./components/Arrial";
import { Checkout } from "./components/Checkout";

function App() {

  const[data,setData]=useState([])
  const[blog,setBlog]=useState([])
  const [dataa,setDataa] = useState([])

  useEffect(()=>{
    fetch("Data.json").then((response)=>{
      return response.json()
    }).then((result)=>{
      setData(result)
    })
  
    fetch("News.json").then((response)=>{
      return response.json()
    }).then((result)=>{
      setBlog(result)
    })

  },[blog,data])

  console.log(dataa)
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home dataa={dataa} setdataa={setDataa}/>} />
        <Route path="/collections" element={<Collections data={data} />} />
        <Route path="/productsdetails/:name" element={<ProductsDetails data={data} setdataa={setDataa} dataa={dataa}><Cart/></ProductsDetails>}/>
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/blog" element={<Blog data={blog} />}/>
        <Route path="/cart" element={<Cart dataa={dataa} />}/>
        <Route path="/checkout" element={<Checkout dataa={dataa} />}/>
        <Route path="/blogdetails/:id" element={<BlogDetails data={blog}/>}/>

      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
