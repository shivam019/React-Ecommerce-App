import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

import { fakeFetch } from "../Backend/Db";

export const CartContext = createContext();

export const ContextProvider = ({ children }) => {
  const [serverData, setServerData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [addedToCardList, setAddedToCardList] = useState({});
  const [wishlistData, setWishlistData] = useState([]);
  const [addedToWishlist, setAddedToWishlist] = useState({});

  const getData = async () => {
    try {
      const { data, status } = await fakeFetch("https://example.com/api/menu");
      if (status === 200) {
        setServerData(data.products);
        setOriginalData(data.products);
        setCategories(data.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);

  const updateCart = (item) => {
    if (!cartData.includes(item)) {
      setCartData((previousData) => [...previousData, item]);
      setAddedToCardList((previousStatus) => ({
        ...previousStatus,
        [item.id]: true,
      }));
      toast.success("Successfully Added to Cart!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  const removeCart = (item) => {
    setCartData((previousData) =>
      previousData.filter((element) => element !== item)
    );
    setAddedToCardList((previousStatus) => ({
      ...previousStatus,
      [item.id]: false,
    }));
    toast.success("Successfully remove from Cart!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleWishListHandler = (item) => {
    const productExistInWishlist = wishlistData.some(
      (element) => element === item
    );

    if (!productExistInWishlist) {
      setWishlistData((previousData) => [...previousData, item]);
      setAddedToWishlist((previousStatus) => ({
        ...previousStatus,
        [item.id]: true,
      }));
      toast.success("Successfully Added to Wishlist!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      setWishlistData((previousData) =>
        previousData.filter((element) => element !== item)
      );
      setAddedToWishlist((previousStatus) => ({
        ...previousStatus,
        [item.id]: false,
      }));
      toast.success("Successfully remove from Wishlist!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const categoriesfilter = (element) => {
    setServerData(() =>
      originalData.filter(
        (item) => item.type.toUpperCase() === element.category.toUpperCase()
      )
    );
  };

  const filterPrice = (element) => {
    if (element === "Low to High") {
      const sortedData = [...originalData].sort((a, b) => a.price - b.price);
      setServerData(sortedData);
      console.log(sortedData);
    } else {
      const sortedData = [...originalData].sort((a, b) => b.price - a.price);
      setServerData(sortedData);
    }
  };

  const filterSearch = (element) => {
    const filteredData = originalData.filter((item) =>
      item.productName.toUpperCase().includes(element.toUpperCase())
    );
    setServerData(filteredData);
  };

  const filterAllClear = () => {
    setServerData(() => [...originalData]);
  };

  return (
    <CartContext.Provider
      value={{
        serverData,
        categories,
        updateCart,
        removeCart,
        cartData,
        addedToCardList,
        wishlistData,
        handleWishListHandler,
        addedToWishlist,
        originalData,
        categoriesfilter,
        filterPrice,
        filterAllClear,
        filterSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
