import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/DataContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const { originalData, updateCart, addedToCardList } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        {originalData
          .filter((element) => element.id === productId)
          .map((element) => (
            <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
              <img
                alt="Nike Air Max 21A"
                className="h-70 w-full rounded object-cover lg:h-96 lg:w-1/2"
                src={element.image}
              />
              <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                <h1 className="my-4 text-3xl font-semibold text-black text-left">
                  {element.productName}
                </h1>
                <h2 className="text-sm font-semibold tracking-widest text-gray-500 text-left">
                  {element.type}
                </h2>

                <p className="leading-relaxed text-left">
                  {element.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="title-font text-xl font-bold text-gray-900 mt-7">
                    Price: {element.price}
                  </span>

                  {addedToCardList[element.id] ? (
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-7"
                      onClick={() => navigate("/cart")}
                    >
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-7"
                      onClick={() => updateCart(element)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProductDetails;
