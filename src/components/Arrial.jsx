import React, { useEffect, useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import flowerpot from "../assets/flowerpot.jpg"
import whitepot from "../assets/whitepot.jpg"
import amet from "../assets/amet.jpg"
import pot from "../assets/pot.jpg"
import chair from "../assets/chair.jpg"
import table from "../assets/table.jpg"
import one from "../assets/one.png"
import two from "../assets/two.png"
import { Link } from 'react-router-dom'


export const Arrial = () => {
  return (
    <>
        <div className="arrial_main">
            <div className="arrial_title text-center my-20">
                <h1 className='main_text text-5xl '>New Arrial</h1>
            </div>
            <div className="arrial_center">
                <div className="arrial_slider">
                    <h1>Slider</h1>
                </div>
                <div className="arrial_cards grid grid-cols-3 grid-rows-2">
                    <Arrial_card image={flowerpot} name='Fiamond Helo Stud Doneco' price='$375.00'/>
                    <Arrial_card image={table} name='Biamond Helo Stud Doneco' price='$300.00'/>
                    <Arrial_card image={whitepot} name='Diamond Helo Stud Doneco' price='$320.00'/>        
                    <Arrial_card image={chair} name='Acamond Helo Stud Doneco' price='$230.00'/>
                    <Arrial_card image={pot} name='Ciamond Helo Stud Doneco' price='$290.00'/>
                    <Arrial_card image={amet} name='Diamond Helo Stud Doneco' price='$370.00'/>
                </div>
            </div>
            <div className="arrial_bottom grid grid-cols-2 my-32">
                <div className="arrial_one mx-3">
                    <div className="center relative">
                    <img src={one} alt="" />
                    <p className='arrial_two_text text-4xl absolute top-40 px-10'>SIDE TABLE</p>
                    <p  className='arrial_two_textt cursor-pointer absolute top-52 px-10'>Discovery now</p>
                    </div>
                    
                </div>
                <div className="arrial_two mx-3">
                    <div className="center relative">
                    <img  src={two} alt="" />
                    <p className=' text-4xl arrial_two_text absolute top-40 px-10'>HANGING LIGHT</p>
                    <p className='arrial_two_textt cursor-pointer absolute top-52 px-10'>Discovery now</p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export function Arrial_card(props){

    const[val,setVal]=useState()
    useEffect(()=>{
        setVal(1)
    })
    return(
        <>
            
            <Link to="/productsdetails">
            <div className="card_main mx-3">
                <div className={`${val==1?"GIRD":""}`}>
                    <div className='flex justify-center items-center'>  <img className='center_img text-center' src={props.image} alt={props.image} /></div>
                    <div className='py-1'>
                        <div className="star text-center py-2 text-[#Ffd700] text-sm"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                        <p className='card_texts text-center text-lg'>{props.name}</p>
                        <p className='card_price text-center text-sm py-2'>{props.price}</p>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}

