import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../index";

const Category = () => {
  const { categories, categoriesfilter } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCategories = (element) => {
    navigate("/product");
    categoriesfilter(element);
  };

  return (
    <div>
      <div className="x-auto my-32  px-2  flex justify-center items-center gap-4 flex-wrap text-left">
        {categories.map((element) => (
          <div className="w-[300px] rounded-lg border border-4 cursor-pointer">
            <img
              src={element.image}
              alt="Laptop"
              className="h-[300px] w-full object-cover border-b-2"
              onClick={() => handleCategories(element)}
            />
            <div className="p-2">
              <h1 className="text-lg font-semibold">{element.category}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
