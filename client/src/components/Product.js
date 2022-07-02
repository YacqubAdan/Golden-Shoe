import React from "react";
import { Link } from "react-router-dom";

const Product = ({ imgUrl, name, color, price, id }) => {
  return (
    <div className="product">
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden transition duration-200 group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={imgUrl}
            alt={name}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link to={`/product/${id}`}>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">£{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
