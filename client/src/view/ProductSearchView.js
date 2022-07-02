import React from "react";
import Product from "../components/Product";
import { getProducts } from "../redux/slice/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductSearchView = () => {
  const dispatch = useDispatch();

  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <span className=" text-amber-500   text-2xl font-semibold   text-center  ">
          POPULAR <span className="text-black">SHOES</span>
        </span>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {status === "loading" ? (
            <h2>Loading...</h2>
          ) : status === "failed" ? (
            <h2>error loading products</h2>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                name={product.name}
                price={product.price}
                imgUrl={product.imgUrl}
                id={product._id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSearchView;
