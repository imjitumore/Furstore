import React, { useEffect, useState } from "react";
import { Arrial_card } from "./Arrial";
import flowerpot from "../assets/flowerpot.jpg";
import flowerpot2 from "../assets/flowerpot2.jpg";
import flowerpot3 from "../assets/flowerpot3.jpg";
import whitepot from "../assets/whitepot.jpg";
import speaker from "../assets/speaker.jpg";
import amet from "../assets/amet.jpg";
import cum from "../assets/cum.jpg";
import lamp2 from "../assets/lamp2.jpg";
import pot from "../assets/pot.jpg";
import greenpot from "../assets/greenpot.jpg";
import chair from "../assets/chair.jpg";
import chair2 from "../assets/chair2.jpg";
import chair3 from "../assets/chair3.jpg";
import chair4 from "../assets/chair4.jpg";
import ushi2 from "../assets/ushi2.jpg";
import table from "../assets/table.jpg";
import sopa from "../assets/sopa.jpg";
import sopa2 from "../assets/sopa2.jpg";
import sopa3 from "../assets/sopa3.jpg";
import mainsopa from "../assets/mainsopa.jpg";
import stonepot from "../assets/stonepot.jpg";
import latkan2 from "../assets/latkan2.jpg";
import lamp3 from "../assets/lamp3.jpg";
import kapat from "../assets/kapat.jpg";
import plant2 from "../assets/plant2.jpg";
import wati from "../assets/wati.jpg";
import kapat2 from "../assets/kapat2.jpg";
import dori from "../assets/dori.jpg";
import clock from "../assets/clock.jpg";
import one from "../assets/one.png";
import two from "../assets/two.png";
import { Link } from "react-router-dom";

export const Products = (props) => {

  const[hot,setHot]=useState()
  useEffect(()=>{

  },[hot])
  const [state1,setState1]=useState(
    [
      {
        images:sopa,
        name:"Fiamond Helo Stud Doneco",
        price:"$330"
      },
      {
        images:speaker,
        name:"Acamond Helo Stud Doneco",
        price:"$200"
      },
      {
        images:sopa2,
        name:"Diamond Helo Stud Doneco",
        price:"$230"
      },
      {
        images:sopa3,
        name:"Ciamond Helo Stud Doneco",
        price:"$230"
      }
    ]
  )

  const[state2,setState2]=useState(
   [
    {
      images:mainsopa,
        name:"Fiamond Helo Stud Doneco",
        price:"$330"
    }
   ]
  )

  const [state3,setState3]=useState(
    [
      {
        images:chair,
        name:"Fiamond Helo Stud Doneco",
        price:"$330"
      },
      {
        images:chair2,
        name:"Acamond Helo Stud Doneco",
        price:"$200"
      },
      {
        images:chair3,
        name:"Diamond Helo Stud Doneco",
        price:"$230"
      },
      {
        images:pot,
        name:"Ciamond Helo Stud Doneco",
        price:"$230"
      }
    ]
  )

  return (
    <>
      <div className="products_main my-20 text-center">
        <div className="products_title my-2">
          <h1 className="main_text text-center text-5xl my-4">Our Products</h1>
        </div>
        <div className="products_details">
          <div className="navbar_ull text-center">
            <ul className="product_list flex justify-between gap-20 mx-auto my-12 text-lg cursor-pointer">
              <li>HOT</li>
              <li onClick={()=>{
                setState1(
                  [
                    {
                      images:chair,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:pot,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:table,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:whitepot,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )

                setState2(
                  [
                    {
                      images:flowerpot,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    }
                  ]
                )

                setState3(
                  [
                    {
                      images:amet,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:cum,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:lamp2,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:greenpot,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )
              }}
              >ARRIALS</li>
              <li onClick={()=>{
                setState1(
                  [
                    {
                      images:kapat2,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:kapat,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:lamp3,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:stonepot,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )

                setState2(
                  [
                    {
                      images:lamp2,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    }
                  ]
                )

                setState3(
                  [
                    {
                      images:chair4,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:cum,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:sopa3,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:ushi2,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )
              }}>
                TRENDING
              </li>
              <li onClick={()=>{
                setState1(
                  [
                    {
                      images:plant2,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:chair2,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:wati,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:mainsopa,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )

                setState2(
                  [
                    {
                      images:clock,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    }
                  ]
                )

                setState3(
                  [
                    {
                      images:latkan2,
                      name:"Fiamond Helo Stud Doneco",
                      price:"$330"
                    },
                    {
                      images:dori,
                      name:"Acamond Helo Stud Doneco",
                      price:"$200"
                    },
                    {
                      images:flowerpot2,
                      name:"Diamond Helo Stud Doneco",
                      price:"$230"
                    },
                    {
                      images:flowerpot3,
                      name:"Ciamond Helo Stud Doneco",
                      price:"$230"
                    }
                  ]
                )
              }} 
              >SALE OFF</li>
            </ul>
          </div>

          <div className="products_center grid grid-cols-3 mx-4">
            <div className="product_one grid grid-cols-2">
              {
                state1.map((val)=>{
                  return(
                    <Arrial_card
                      image={val.images}
                      name={val.name}
                      price={val.price}
                  />
                  )
                })
              }
              
            </div>

            <div className="products_two flex justify-center mx-auto">
              <h1 className="text-6xl">
              {
                state2.map((val)=>{
                  return(
                    <Arrial_card
                      image={val.images}
                      name={val.name}
                      price={val.price}
                  />
                  )
                })
              }
              
              </h1>
            </div>
            <div className="product_three grid grid-cols-2">
            {
                state3.map((val)=>{
                  return(
                    <Arrial_card
                      image={val.images}
                      name={val.name}
                      price={val.price}
                  />
                  )
                })
              }
            </div>
          </div>
        </div>
        <Link to="/collections"><button className='product_btn text-lg text-center border-2 border-[#2B5E5D] hover:text-white  transition duration-1000 px-12 py-3 hover:bg-[#2B5E5D] my-16'>View More</button></Link>
      </div>
    </>
  );
};


