import { React } from "react";
import { useNavigate } from "react-router-dom";


import Category from "./Category/Category";
import Banner from "../../Assets/banner-img.webp";
import Footer from "../Footer/Footer";

import {CiDeliveryTruck} from "react-icons/ci";
import {GrStatusGood} from "react-icons/gr";
import {GiDeliveryDrone} from "react-icons/gi";
import {BsGift} from "react-icons/bs"


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-white  ">
        <div className="mx-auto max-w-7xl  lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center  px-4   md:-mt-6  lg:col-span-7 lg:gap-x-6 lg:px-6  xl:col-span-6  sm:mx-auto">
            <div className=" flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1 sm:m-auto md:m-0 mx-auto">
              <div className="rounded-full bg-hero-offer-bg px-2 ">
                <p className="text-sm font-medium  sm:text-center md:text-left">
                  50% Off
                </p>
              </div>
              <p className="text-sm font-medium sm:text-center md:text-left ">
                {" "}
                Best Deals Now&rarr;
              </p>
            </div>
            <h1 className="mt-4 text-5xl md:text-left text-center  font-bold tracking-tight text-hero-heading md:text-7xl lg:text-7xl ">
              Soundtrack sales
            </h1>
            <p className="mt-4 text-lg text-gray-700 md:text-left sm:text-center py-1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur modi blanditiis dolores quasi eaque explicabo!
            </p>
            <div className="mt-4 flex items-start sm:m-auto sm:my-2 md:m-0 md:my-2 py-1 mx-auto">
              <div>
                <button
                  type="button"
                  className="rounded-md bg-button-bg px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={() => navigate("/product")}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5 lg:-mr-10 xl:col-span-6  ">
            <img
              className="aspect-[2/2]  lg:aspect-[3/3] sm:h-[500px] lg:h-[700px] xl:aspect-[16/9]"
              src={Banner}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <BsGift size={24}/>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Special Offer
            </h3>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <GiDeliveryDrone size={30}/>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Fast Delivery
            </h3>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CiDeliveryTruck size={30}/>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Free Delivery
            </h3>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <GrStatusGood size={30}/>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Quality Products
            </h3>
          </div>
        </div>
      </div>
      <Category />
      <Footer />
    </div>
  );
}
