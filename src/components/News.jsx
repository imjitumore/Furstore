import React from 'react'
import blog_8 from "../assets/blog_8.jpg";
import longsopa from "../assets/longsopa.png";
import pics1 from "../assets/pics1.png";
import pics2 from "../assets/pics2.png";
import pics3 from "../assets/pics3.png";
import pics4 from "../assets/pics4.png";
import pics5 from "../assets/pics5.png";
import pics6 from "../assets/pics6.png";

export const News = () => {
  return (
    <>
        <div className="news_main my-20">
            <div className="main_text new_title text-6xl text-center my-10">
                Latest News
            </div>
            <div className="new_content">
            <LatestNews img={blog_8} date={"Sep 18 2020 - By Vinivo theme"} title={"Consectetur adipiscing elit"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae animi tenetur odio. Explicabo alias, Non quae animi tenetur odio. Explicabo alias, quibusdam dolores deleniti debitis esse."} btn={"Read more"} />
            </div>
        </div>

        <div className="news_deal grid grid-cols-2 py-10 px-14 my-28 gap-20 bg-[#F5F5F5]">
            <div className="deal_left">
                <img src={longsopa} alt="" />
            </div>
            <div className="deal_right py-6">
            <p className='new__text text-5xl my-8'>Deal Of The Day</p>
                <p className='news_lorem_text text-xl  my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, numquam, delectus ea voluptates dignissimos laborum sequi nesciunt facilis ullam eveniet quo veritatis perferendis. Aperiam.</p>
                <button className='news_btn my-6 rounded-lg py-3 text-center bg-[#2B5E5D] text-white  transition duration-1000 px-12 border-2 text-lg' >Shop now</button>
            </div>
        </div>

        <Gallary/>
    </>
  )
}

function LatestNews(props)
{
    return(
        <>
            <div className="news grid grid-cols-2 mx-14 gap-12">
                <div className="news_left">
                    <img src={props.img} alt="" />
                </div>
                <div className="news_right">
                    <p className='text-md my-3'>{props.date}</p>
                    <p className='text__news text-5xl my-6'>{props.title}</p>
                    <p className='text_para text-xl  my-4'>{props.para}</p>
                    <button className='text_btn my-6 py-3 text-center hover:bg-[#2B5E5D] hover:text-white  transition duration-1000 px-12 border-2 text-lg' >{props.btn}</button>
                </div>
            </div>
        </>
    )
}

function Gallary()
{
    return(
        <>
        <div className="gallary_main my-28">
            <div className="main_text gallary_title text-6xl text-center my-14">
                Gram Gallery
            </div>
            <div className="gallery_pics grid grid-cols-6 gap-6 px-4">
                <img src={pics1} alt="" />
                <img src={pics2} alt="" />
                <img src={pics3} alt="" />
                <img src={pics4} alt="" />
                <img src={pics5} alt="" />
                <img src={pics6} alt="" />
            </div>
        </div>
             
        </>
    )
}

