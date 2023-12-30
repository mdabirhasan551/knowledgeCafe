import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Singlecard.css";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Singlecard = ({ blogs }) => {
  console.log(blogs);

  return (
    <div className="card-width lg:w-3/4 sm:w-20">
      <div className="flex items-center justify-between m-20">
        <div className="card card-compact w-full md:w-96 lg:w-full h-96 shadow-xl">
          <figure>
            <img src={blogs.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h2 className="card-title">{blogs.title}</h2>
              <p className="ms-40">{blogs.readingTime}</p>
              <button><FontAwesomeIcon icon={faBookmark}/></button>
            </div>

            <p>{blogs.content}</p>
            <div className="card-actions justify-start">
              <button className="btn btn-secondary font-bold">Mark As Viewed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlecard;
