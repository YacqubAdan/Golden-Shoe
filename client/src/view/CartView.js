import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTotals, removeFromCart } from "../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

  const getTotalCartAmount = () => {
    dispatch(getTotals(cartItems));
    return `£ ${cartTotalAmount}`;
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="flex justify-center flex-col items-center ">
          <h2 className="text-2xl  tracking-tight text-gray-900 mt-10 mb-10">
            No Items in Cart
          </h2>
          <Link to="/search">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping<span aria-hidden="true"> →</span>
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <ul className="mx-10 divide-y divide-gray-200 height">
            {cartItems.map((product, key) => (
              <li className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <Link to={`/product/${product._id}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <p className="ml-4">£{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500"></p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">{product.cartQuantity}</p>
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => dispatch(removeFromCart(product))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex ml-6 items-center">
              <span className="mr-3">Delivery</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-amber-500 text-base pl-3 pr-10">
                  <option>Click & Collect</option>
                  <option>Standard Delivery</option>
                  <option>Next-day</option>
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
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                <Link to="/search">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping<span aria-hidden="true"> →</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
