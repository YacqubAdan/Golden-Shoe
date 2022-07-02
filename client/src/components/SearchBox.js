import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <>
      <form className=" mb-10 md:mb-0  md:pr-8" onSubmit={submitHandler}>
        <input
          className="w-72 py-1 pl-3 pr-10 rounded-lg focus:outline-0"
          type="text"
          placeholder="Search Products.."
          onChange={(e) => setKeyword(e.target.value)}
          name="search"
        />
        <button className="-ml-8 border-6 bg-trasparent" type="submit">
          <i className="fa fa-search text-gray-400" />
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </button>
      </form>
    </>
  );
};

export default SearchBox;
