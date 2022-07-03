import React from "react";
import Product from "../components/Product";
import { getProducts } from "../redux/slice/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductSearchView = () => {
  const dispatch = useDispatch();

  const { products, status } = useSelector((state) => state.products);
  const { productSearch } = useSelector((state) => state.product);

  let product = products.filter((product) =>
    product.name.toLowerCase().includes(productSearch)
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <span className=" text-amber-500   text-2xl font-semibold   text-center  "></span>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {status === "loading" ? (
            <h2>Loading...</h2>
          ) : status === "failed" ? (
            <h2>error loading products</h2>
          ) : product.length === 0 ? (
            product.name ? (
              <Product
                key={product._id}
                name={product.name}
                price={product.price}
                imgUrl={product.imgUrl}
                id={product._id}
              />
            ) : (
              <h1>No results found</h1>
            )
          ) : (
            product.map((shoe) => (
              <Product
                key={shoe._id}
                name={shoe.name}
                price={shoe.price}
                imgUrl={shoe.imgUrl}
                id={shoe._id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSearchView;
