import { React, useContext } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";

import { CartContext } from "../../index";
import Filter from "../../Utils/Filter";

export default function Product() {
  const {
    serverData,
    updateCart,
    addedToCardList,
    handleWishListHandler,
    addedToWishlist,
    filterSearch
  } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-12xl px-2 py-10 lg:px-10">
        <div className="md:flex md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-xl font-bold">Products</h1>
          </div>

          <div className="w-full md:w-1/3">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
              type="text"
              placeholder="search here"
              onChange={(event)=>filterSearch(event.target.value)}
            />
          </div>
          <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Category <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Color <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <hr className="my-8" />
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Filter />

          <div className="h-[400px] w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full">
            <div className="mx-auto grid w-full max-w-6xl items-center space-y-4 px-2 py-5 md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-4">
              {serverData.map((element) => (
                <div
                  key={element.id}
                  className="rounded-md border max-w-1xl text-left relative   "
                >
                  <img
                    src={element.image}
                    alt="Laptop"
                    className="aspect-[16/9] max-w-6xl w-full rounded-md md:aspect-auto md:h-[200px] lg:h-[200px] sm:h-[300px] cursor-pointer"
                    onClick={() => navigate(`/product/${element.id}`)}
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      {element.productName}
                    </h1>
                    <p>{element.price}</p>

                    {addedToWishlist[element.id] ? (
                      <span className="absolute right-1 top-2 text-xl cursor-pointer  text-amber-500 ">
                        <AiTwotoneHeart
                          onClick={() => handleWishListHandler(element)}
                        />
                      </span>
                    ) : (
                      <span className="absolute right-1 top-2 text-xl cursor-pointer  text-black ">
                        <AiOutlineHeart
                          onClick={() => handleWishListHandler(element)}
                        />
                      </span>
                    )}

                    {addedToCardList[element.id] ? (
                      <button
                        type="button"
                        className="mt-4 w-full rounded-sm  bg-CEDEBD px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => navigate("/cart")}
                      >
                        Go to Cart
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-96C291 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-96C291 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => updateCart(element)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
