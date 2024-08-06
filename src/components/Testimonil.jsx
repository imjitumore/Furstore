import React, { useEffect, useState } from 'react'
import man1 from "../assets/man1.png"
import man2 from "../assets/man2.png"
import man3 from "../assets/man3.png"
import { Arrial_card } from './Arrial'
import greenpot from "../assets/bigflowerpot1.jpg";
import chair_1 from "../assets/bigchair1.jpg";
import topl from "../assets/bigamet2.jpg";
import lamp from "../assets/biglamp1.jpg";



export const Testimonil = () => {

  const [data,setData]=useState()
  

  const [proData,setProData]=useState(
    [
      {
        images:greenpot,
        name:"Fiamond Helo Stud Doneco",
        price:"$330"
      },
      {
        images:chair_1,
        name:"Acamond Helo Stud Doneco",
        price:"$200"
      },
      {
        images:topl,
        name:"Diamond Helo Stud Doneco",
        price:"$230"
      },
      {
        images:lamp,
        name:"Ciamond Helo Stud Doneco",
        price:"$230"
      }
    ]
  )

    
  
  return (
    <>
    {/* <h1>{
      data.map((val)=>{
        return(
          <h1>{val.image}</h1>
        )
      })
    }</h1> */}
        <div className="testimonals_main my-20">
        <div className="testimonal_title">
            <h1 className='main_text text-6xl text-center my-10'>Testimonilas</h1>
        </div>
        <div className="testimonal_center grid grid-cols-3 gap-10 mx-8 ">
        <Testimonilas profile={man1} name={"Rushi Godke"} positon={"CEO of Coding cloud"} quote={`"`} lorem={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laboriosam!"}/>
        <Testimonilas profile={man2} name={"Natasha Chohan "} positon={"HR in CC"} quote={`"`} lorem={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laboriosam!"}/>
        <Testimonilas profile={man3} name={"Sam Kharat"} positon={"Associate Manager"} quote={`"`} lorem={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laboriosam!"}/>    
        </div>
        </div>
        <br />
        <div className="Flash_details my-20">
            <div className="flash_title  text-center my-5 ">
                <p className=' text-6xl main_text' >Flash Deals</p>
            </div>
            <div className="flash_main grid grid-cols-4 " >
              {proData.map((val)=>{
                return <Arrial_card key={val.id}
                 image={val.images}
                 name={val.name}
                 price={val.price}
               />
              })}
            </div>
        </div>
    </>
  )
}

function Testimonilas(props)
{
  return(
    <>
      <div className="testimonials_main grid grid-cols-2 shadow-lg shadow-[#aca7a7] py-12">
        <div className="testi_left">
          <img className='text-center pl-12 my-2' src={props.profile} alt="" />
          <p className="testi_name text-xl text-center">{props.name}</p>
          <p className='text_pos text-center py-2' >{props.positon}</p>
        </div>

        <div className="testi_right py-10">
          <p className="text-4xl text-center">{props.quote}</p>
          <p className="testi_lorem text-md text-center py-1">{props.lorem}</p>
        </div>
      </div>
    </>
  )
}