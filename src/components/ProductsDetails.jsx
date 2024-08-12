import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Cards } from "./Home";
import payment from "../assets/payment.png";
import { faClock, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RelatedProducts } from "./Collections";
import { Link } from "react-router-dom";
import { Arrial_card } from "./Arrial";
import bigamet3 from "../assets/bigamet3.jpg"
import bigflowerpot4 from "../assets/bigflowerpot4.jpg"
import bigtable3 from "../assets/bigtable3.jpg"
import bigchair5 from "../assets/bigchair5.jpg"
import bigchair_1 from "../assets/bigchair_1.jpg"
import bigclock3 from "../assets/bigclock3.jpg"
import bigcum3 from "../assets/bigcum3.jpg"
import bigushi3 from "../assets/bigushi3.jpg"


export const ProductsDetails = ({ data }) => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const [val, setVal] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      const findProduct = data.find((item) => item.name === name);
      setProduct(findProduct);
    }
  }, [data, name, val]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="containerr grid grid-cols-2 my-24">
        <div className="mx-12">
          <img className="w-full" src={product.image} alt="" />
        </div>
        <div className="mx-6">
          <p className="text-2xl font-bold py-2">{product.name}</p>
          <div className="flex items-center gap-5 py-2">
            <div className="star py-2 text-[#Ffd700] text-sm">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="text-sm font-bold">VIEW ALL REVIEWS</p>
          </div>
          <p className="text-2xl font-bold">{product.price}</p>
          <p className="text-sm py-3 text-[#797878]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            voluptas delectus officia optio repellat eum alias quo perferendis
            possimus doloribus? Quae pariatur enim hic dolore laudantium nihil
            consectetur rerum officiis!
          </p>
          <p className="text-md">
            <strong>Tags : </strong>
            {product.Tags}
          </p>
          <p className="py-3">
            <strong>Category:</strong> {product.Category}
          </p>
          <p>
            <strong>Description:</strong> {product.discription}
          </p>
          <div className="py-5">
            <p>
              <strong>Size :{val} </strong>
            </p>
            <div className="py-3">
              <button
                onClick={() => {
                  setVal(" Small");
                }}
                className="bg-[white] py-2  px-4 hover:text-white hover:bg-[black] border-2 transition duration-700"
              >
                Small
              </button>
              <button
                onClick={() => {
                  setVal(" Medium");
                }}
                className="bg-[white] py-2 mx-4 px-4 hover:text-white hover:bg-[black] border-2 transition duration-700"
              >
                Medium
              </button>
              <button
                onClick={() => {
                  setVal(" Large");
                }}
                className="bg-[white] py-2  px-4 hover:text-white hover:bg-[black] border-2 transition duration-700"
              >
                Large
              </button>
            </div>
          </div>
          <hr />
          <div className="py-3">
            <p className="py-2">Guaranteed safe checkout:</p>
            <img className="cursor-pointer" src={payment} alt="" />
          </div>
          <div className="py-3">
            <div className="py-3 flex items-center">
              <FontAwesomeIcon icon={faClock} />
              <p className="text-sm py-2 px-3">
                Orders ship within 5 to 10 business days.
              </p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTruck} />
              <p className="text-sm px-3">
                Hoorey ! This item ships free to the US
              </p>
            </div>
          </div>
        </div>
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

      <CustomerView />
      <RelatedProducts />
      <hr />
      <Showcase />
      <Footer />
    </>
  );
};

function CustomerView() {
  return (
    <>
      <div className="bg-[#F1F1F1] py-20 px-40 ">
        <p className="text-3xl py-3 my-5 font-bold">Customer View</p>
        <div className="star py-2 text-[#Ffd700] text-lg">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p className="text-sm">Be the first to write a review</p>
        <button className="text-sm text-white py-3 px-24 rounded-md font-bold my-3 bg-[#387581]">
          Write A Review
        </button>
      </div>
    </>
  );
}

function Showcase() {
  const data =[
    {
      id: "1",
      image:bigamet3,
      name: "Amet3",
      price: "$98.23",
      discription:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
      Tags: "13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
      Category:
        "Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
      Quantity: "5",
    },
    {
      id: "2",
      image:bigtable3,
      name: "Table3",
      price: "$200.23",
      discription:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
      Tags: "13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
      Category:
        "Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
      Quantity: "8",
    },
    {
      id: "3",
      image: bigchair5,
      name: "Chair5",
      price: "$70.23",
      discription:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
      Tags: "13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
      Category:
        "Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
      Quantity: "4",
    },
    {
      id: "4",
      image: bigclock3,
      name: "Clock3",
      price: "$120.23",
      discription:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
      Tags: "13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
      Category:
        "Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
      Quantity: "7",
    },
    {
      id: "5",
      image: bigchair_1,
      name: "chair_1",
      price: "$98.23",
      discription:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
      Tags: "13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
      Category:
        "Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
      Quantity: "5",
    },
    {
      id: "6",
      image: bigushi3,
      name: "Ushi3",
      price: "$200.23",
      discription:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
      Tags: "13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
      Category:
        "Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
      Quantity: "8",
    },

    {
      id: "7",
      image: bigflowerpot4,
      name: "Flower Pot4",
      price: "$98.23",
      discription:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
      Tags: "13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
      Category:
        "Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
      Quantity: "5",
    },
    {
      id: "8",
      image: bigcum3,
      name: "Cum3",
      price: "$200.23",
      discription:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehendereniet architecto",
      Tags: "13.7’ x 6.3' x 4’, 23.7’ x 12.3' x 8’, White",
      Category:
        "Bathroom, Bedroom, Bookshelf, Clocks, Home page, Living Room, Planter, Sofa, Tables",
      Quantity: "8",
    },
  ];
  return (
    <>
      <div className=" my-20">
        <div className="flash_title  text-center my-5 ">
          <p className=" text-3xl main_text py-6">You Might Also Like</p>
        </div>
        <div className="text-center ">
          <div className="grid grid-cols-4 items-center mx-6 gap-2 my-4">
            {data.map((val) => {
              return (
                <Link to={`/productsdetails/${val.name}`}>
                  <Arrial_card
                    key={val.id}
                    image={val.image}
                    name={val.name}
                    price={val.price}
                  />
                </Link>
              );
            })}
          </div>
          <Link to={"/collections"}>
            <button className="text-md text-white py-4 px-14 rounded-md font-bold my-5 bg-[#387581]">
              View More Items
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
