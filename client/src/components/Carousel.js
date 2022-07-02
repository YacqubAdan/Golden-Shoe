import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLatestProducts } from "../redux/slice/latestProductsSlice";
import { Link } from "react-router-dom";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "./Loading";

const Carousel = () => {
  const dispatch = useDispatch();
  let count = 0;

  const { product, status } = useSelector((state) => state.latestProducts);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    const productsLength = product.length;
    count = (currentIndex + 1) % productsLength;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = product.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  useEffect(() => {
    dispatch(getLatestProducts());
  }, [dispatch]);
  return (
    <div className="mt-10">
      {status === "loading" ? (
        <Loading />
      ) : status === "failed" ? (
        <h2>error loading products</h2>
      ) : (
        <div className="max-w-screen-xl m-auto">
          <div className="w-full relative select-none">
            <span className=" text-amber-500 bg-indigo-800 p-2 text-2xl font-semibold absolute z-10  text-center m-10 ">
              LATEST <span className="text-black">PRODUCTS</span>
            </span>

            <Link to={`/product/${product[currentIndex]._id}`}>
              <div className="aspect-w-16 aspect-h-9 ">
                <img
                  className="cursor-pointer rounded-2xl"
                  src={product[currentIndex].imgUrl}
                  alt=""
                />
              </div>
            </Link>
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
              <FontAwesomeIcon
                className="text-white text-4xl cursor-pointer "
                onClick={handleOnPrevClick}
                icon={faCircleChevronLeft}
              />
              <FontAwesomeIcon
                className="text-white text-4xl cursor-pointer"
                onClick={handleOnNextClick}
                icon={faCircleChevronRight}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
