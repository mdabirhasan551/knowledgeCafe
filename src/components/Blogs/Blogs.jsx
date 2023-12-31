import React, { useEffect, useState } from "react";
import Singlecard from "../Singlecard/Singlecard";

const Blogs = ({ handleReadingTime, handleBookmark, handleItems }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  return (
    <div className="row">
      {blogData.map((blog) => (
        <Singlecard
          blogs={blog}
          handleReadingTime={handleReadingTime}
          handleBookmark={handleBookmark}
          handleItems={handleItems}
        ></Singlecard>
      ))}
    </div>
  );
};

export default Blogs;
