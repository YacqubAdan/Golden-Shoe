import { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../redux/slice/productDetailSlice";
import { addToCart } from "../redux/slice/cartSlice";
import Loading from "../components/Loading";

const ProductDetailView = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const { product, status } = useSelector((state) => state.product);
  const { id } = useParams();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch]);

  return (
    <div>
      {status === "loading" ? (
        <Loading />
      ) : status === "failed" ? (
        <h2>error</h2>
      ) : (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={product.imgUrl}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.countStock > 0 ? "In Stock" : "Out of Stock"}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-amber-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-amber-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-amber-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-amber-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-amber-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed">{product.desc}</p>
                <Fragment>
                  <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                    <AccordionHeader>
                      <p className="text-base leading-4 text-gray-800 mt-3">
                        Shipping and Returns
                      </p>
                    </AccordionHeader>
                    <AccordionBody>
                      You will be responsible for paying for your own shipping
                      costs for returning your item. Shipping costs are
                      nonrefundable
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                    <AccordionHeader>
                      <p className="text-base leading-4 text-gray-800 mt-3">
                        Contact Us
                      </p>
                    </AccordionHeader>
                    <AccordionBody>
                      If you have any questions on how to return your item to
                      us, contact us at 0116 256 6789. Our offices are open
                      Monday-Friday from 9am-5pm.
                    </AccordionBody>
                  </Accordion>
                </Fragment>

                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Colour</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-amber-500 text-base pl-3 pr-10">
                        {product.colours &&
                          product.colours.map((colour, key) => (
                            <option key={key}>{colour}</option>
                          ))}
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-amber-500 text-base pl-3 pr-10">
                        {product.sizes &&
                          product.sizes.map((size, key) => (
                            <option key={key}>{size}</option>
                          ))}
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    £{product.price}
                  </span>
                  <button
                    className={
                      product.countStock <= 0
                        ? `flex ml-auto text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none  rounded`
                        : `flex ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded`
                    }
                    onClick={
                      product.countStock > 0
                        ? () => handleAddToCart(product)
                        : undefined
                    }
                  >
                    {product.countStock > 0 ? "Add to Stock" : "Out of Stock"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailView;
