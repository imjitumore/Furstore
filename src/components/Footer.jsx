import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faLocationDot, faMobile, faVoicemail , } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/Logo.svg"
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <>
        <div className="footer_main mx-10 text-center">
            <hr />
            <div className="footer_list  grid sm:grid-cols-5 grid-cols-1 my-10">
                <div className="addr my-2 justify-center">
                <p className='footer_text text-3xl text-center flex justify-center'> <img className='h-7' src={logo} alt=""  /></p>
                    <p className='items-center my-4 about_p justify-center flex gap-2 '> <FontAwesomeIcon icon={faLocationDot} /> 
                        <p className='about_p '>2357 Gordon Street, CA</p></p>
                    <p className='items-center my-4 about_p flex items-center gap-5 justify-center '><FontAwesomeIcon icon={faMobile} /> 
                        <p className='about_p'>123 456 7890</p></p>
                    <p className='items-center my-4 about_p flex gap-5 justify-center '> <FontAwesomeIcon icon={faEnvelope} /> 
                        <p className='about_p '>demo@gmail.com</p></p>
                    
                </div>
                <div className="support my-2">
                    <p className='footer_text text-3xl'>Support</p>
                    <p className='items-center my-4 about_p'>FAQ"s</p>
                    <p className='items-center my-4 about_p'>Shopping</p>
                    <p className='items-center my-4 about_p'>Return</p>
                </div>
                <div className="abouts my-2 text-center">
                    <p className='footer_text text-3xl'>About</p>
                    <p className='about_p items-center my-4'>Our Story</p>
                    <p className='items-center my-4 about_p'>Our Team</p>
                    <p className='items-center my-4 about_p'>Designers</p>
                </div>
                <div className="service my-2 ">
                    <p className='footer_text text-3xl text-center'>Customer Service</p>
                    <p className='items-center my-4 about_p'>Home</p>
                    <p className='items-center my-4 about_p'>Product</p>
                    <p className='items-center my-4 about_p'>Contact</p>
                </div>

                <div className="news my-2">
                    <p className='footer_text text-3xl text-center'>News Letters</p>
                    <div className='flex gap-4  justify-center my-4'>
                    <FontAwesomeIcon icon={faFacebook} /> 
                    <FontAwesomeIcon icon={faPinterest} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter }/>
                    </div>
                    
                </div>
            </div>
            <hr />
            <div className="last text-center text-xl my-3">
                <p className='cp'>Copyright © 2023 Vinovathemes. All Rights Reserved.</p>
            </div>
        </div>
    </>
  )
}
