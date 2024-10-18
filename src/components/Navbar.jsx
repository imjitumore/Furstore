import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { RxCross2 } from "react-icons/rx";
import { faUser, faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { CiMedicalCross } from "react-icons/ci";

export const Navbar = () => {
  const [btnval, setbtnval] = useState(false);

  return (
    <>
      <div className="navbar_menu flex px-4 py-3 justify-between items-center">
        <div className="navbar_logo flex ">
          <button
            className="navbar_btn pr-2 sm:hidden"
            onClick={() => {
              setbtnval(!btnval);
            }}
          >
            {btnval ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
            <Link to="/"> <img className="h-6" src={logo} alt="" /></Link>
        </div>
        <div className=" sm:text-lg text-sm  sm:block hidden">
          <ul className={"flex gap-6"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collections">Collection</Link>
            </li>
            <li><Link to={'/productsdetails/Pot1'}>Products</Link></li>
            <li><Link to='/contactus'>Other Pages</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
        <div className="navbar_logos flex gap-6 justify-end ">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faUser} />
          <Link to={"/cart"}><FontAwesomeIcon icon={faCartShopping} /></Link>
        </div>
      </div>
      <div className={`${btnval?"sm:text-lg text-sm bg-white my-2 mx-4 py-10 px-10  transition-all duration-700 absolute z-10 sm:-left-full left-0":"sm:text-lg text-sm bg-white my-4 mx-4 py-10 px-10 transition-all duration-700 absolute z-10 -left-full"}`}>
          <ul>
            <li className="my-3">
              <Link to="/">Home</Link>
            </li>
            <li className="my-3">
              <Link to="/collections">Collection</Link>
            </li>
            <li className="my-3"><Link to={'/productsdetails/Pot1'}>Products</Link></li>
            <li className="my-3"><Link to='/contactus'>Other Pages</Link></li>
            <li className="my-3"><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
    </>
  );
};
