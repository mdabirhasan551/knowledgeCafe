import React, { useState, useEffect } from "react";

const Sidecard = ({ readingTime }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const getReadingTime = localStorage.getItem("readingTime");
    setTime(getReadingTime);
  }, [readingTime]);
  return (
    <div className="lg:w-3/4 sm:w-1/3 me-20 m-10 border-black border-2 rounded">
      <h1 className="font-bold text-3xl text-center m-5">
        Total Bookmarked Contents:{" "}
      </h1>
      <h1 className="font-bold text-3xl text-center m-5">
        Total Read Time: {time}
      </h1>
      <h1 className="font-bold text-3xl text-center m-5">
        My Bookmarked Contents:{" "}
      </h1>
    </div>
  );
};

export default Sidecard;
