import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowDownWideShort,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Cards } from "./Home";
import { Arrial_card } from "./Arrial";
import { IoGrid } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { CiGrid31 } from "react-icons/ci";
//import { BrowserRouter, Route, Routes , Link } from 'react-router-dom'
import { Footer } from "./Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


export const Collections = (props) => {
  return (
    <>
      <Navbar />
      <Bookshelf />
      <Stocks />
      <Allproducts data={props.data} />
      <Tags/>
      <Footer />
    </>
  );
};

function Bookshelf() {
  return (
    <>
      <div className="bookshelf_main bg-[#f5f5f5] h-80 relative">
        <div className="center flex flex-col  absolute top-[40%] left-10">
          <h1 className="font-bold text-3xl ">BOOKSHELF</h1>
          <div className="text-[12px] flex gap-2 my-4">
            <FontAwesomeIcon icon={faHome} />
            <p className="">Home Bookshelf</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Stocks() {
  return (
    <>
      <div className="stock_main">
        <div className="filterBy flex items-center mx-16 my-5">
          <FontAwesomeIcon icon={faArrowDownWideShort} />
          <p className="text-2xl font-bold">FILTER BY</p>
        </div>
        <div className="hr mx-16 my-6">
          <hr />
        </div>
        <div className="selects flex justify-center gap-2">
          <select className="slct py-4 px-4  text-center">
            <option value="">Availabitlity</option>
          </select>
          <select className="py-3 px-4  text-center  slct">
            <option value="">Price</option>
          </select>
          <select className="py-3 px-4  text-center slct">
            <option value="">Product Type</option>
          </select>
          <select className="py-3 px-4  text-center slct">
            <option value="">More Filters</option>
          </select>
          <select className="py-3 px-4  text-center slct">
            <option value="">Brand</option>
          </select>
          <select className="py-3 px-4  text-center slct">
            <option value="color">Color</option>
          </select>
          <select className="py-3 px-4  text-center slct">
            <option value="">Size</option>
          </select>
        </div>

        <button className="text-white bg-[#387581] text-sm py-3 px-6 rounded-md my-4 mx-14">
          <FontAwesomeIcon icon={faTrash} /> CLEAR ALL
        </button>
      </div>
    </>
  );
}

function Allproducts(props) {
  const [value, setVal] = useState();
  return (
    <>
      <div className="stucture">
        <div className="sorted_grid flex items-center justify-between pr-10">
          <select className="sel py-3 px-3 mx-14 my-4">
            <option value="">Sort By featured</option>
          </select>
          <div className="grid_boxes flex text-3xl gap-3">
            <TfiLayoutGrid4Alt
              onClick={() => {
                setVal(1);
              }}
            />
            <BsFillGrid3X3GapFill onClick={() => setVal(3)} />
            <IoGrid onClick={() => setVal(2)} />
            <CiGrid31 onClick={() => setVal(0)} />
          </div>
        </div>
        <div
          className={`products_container${
            value == 0 ? "products_container" : ""
          } ${value == 3 ? "changeGrid" : ""} ${
            value == 2 ? "changeGrid2" : ""
          } ${value == 1 ? "changeGri1" : ""}`}
        >
          {props.data.map((val) => (
            <Link to={`/productdetails/${val.id}`} key={val.id}>
              <Arrial_card
                image={val.image}
                name={val.name}
                price={val.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};


function Tags()
{
  return(
    <>
      <div className="Tags px-10 bg-[#f5f5f5] py-10">
        <p className="text-sm font-bold py-2">TAGS</p>
        <div className="btns text-sm flex w-full justify-evenly gap-2 py-8">
        <button className="border-2 px-3 py-2 rounded-md bg-[white] hover:bg-[#387581] hover:text-white w-full">13.7'x6.3'x4'</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">23.7'x12.3'x8'</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">28.7'x16.3'x10'</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">Black</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">Blue</button>
        <button className="border-2 px-3 py-2 w-full rounded-md hover:bg-[#387581] hover:text-white bg-[white]">Gray</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">Orange</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">Pink</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">Red</button>
        <button className="border-2 px-3 py-2 rounded-md hover:bg-[#387581] hover:text-white bg-[white] w-full">White</button>
        </div>
        <h1 className="font-bold text-2xl py-5">BOOKSHELF</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum eu quam blandit maximus. Donec at lacus lacus. Donec ultricies lacus libero, fermentum mollis velit accumsan ac. Morbi in nunc erat. Sed a ligula tristique mi aliquam pellentesque. Ut malesuada nisl eros, ut sollicitudin ex mattis quis. Praesent cursus a augue ac placerat. Nam mattis mi ac dui suscipit egestas. Vestibulum lorem libero, feugiat dapibus urna id, gravida varius tellus. Nam sed congue quam. Sed sit amet libero augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et efficitur ante. Vestibulum quis volutpat felis, volutpat ornare nunc. Vivamus ac aliquam justo. Mauris ultrices posuere velit, eu elementum mauris.
        <br /> Phasellus vitae egestas orci. Pellentesque mi ex, vestibulum nec neque mollis, ultricies mollis elit. Sed purus elit, aliquet at erat id, efficitur vehicula velit. Fusce tristique lectus a velit finibus, sed facilisis odio placerat. Ut quis efficitur mi, quis porttitor ipsum. Phasellus euismod est vitae neque consectetur, nec laoreet enim pharetra. Aliquam non sem sit amet nunc consectetur ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed orci non magna consectetur viverra. Suspendisse at lectus lacus. Suspendisse eget ultricies mi. Pellentesque rutrum porta lorem, ac interdum nisl faucibus at. Aliquam turpis metus, aliquam at bibendum scelerisque, posuere blandit urna. Nunc sit amet lacus purus. In mattis laoreet purus eget pulvinar. Quisque non enim mollis, ultricies quam efficitur, efficitur nunc.</p>        
      </div>

      <div className="card grid grid-cols-3 gap-3 py-10 mx-10">
        <Cards
          name="Extra Shipping"
          para="lorem ipsum dolor sit amet consectetur adipisicing sit amet consectetur adipisicing elit. "
        />
        <Cards
          name="Return Policy"
          para="lorem ipsum dolor sit amet sit amet consectetur adipisicing consectetur adipisicing elit. "
        />
        <Cards
          name="Payment Secured"
          para="lorem ipsum dolor sit sit amet consectetur adipisicing amet consectetur adipisicing elit. "
        />
        </div>
    </>
  )
}
