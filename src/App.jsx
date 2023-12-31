import React, { useState } from "react";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Sidecard from "./components/Sidecard/Sidecard";

const App = () => {
  const [readingTime, setReadingTime] = useState("");
  const [bookmarked, setBookMarked] = useState(0);
  const [items, setItems] = useState();

  const handleBookmark = (numberOfBookmarked) => {
    const previousRead = JSON.parse(localStorage.getItem("Bookmark"));
    if (previousRead) {
      const newRead = previousRead + numberOfBookmarked;
      localStorage.setItem("Bookmark", newRead);
      setBookMarked(newRead);
    } else {
      localStorage.setItem("Bookmark", numberOfBookmarked);
      setBookMarked(numberOfBookmarked);
    }
  };

  const handleReadingTime = (time) => {
    const previousTime = JSON.parse(localStorage.getItem("readingTime"));
    if (previousTime) {
      const newTime = previousTime + time;
      localStorage.setItem("readingTime", newTime);
      setReadingTime(newTime);
    } else {
      localStorage.setItem("readingTime", time);
      setReadingTime(time);
    }
  };

  const handleItems = (listItems) => {
    const previousTitle = JSON.parse(localStorage.getItem("Title"));
    console.log(previousTitle);
    
    if (previousTitle) {
      let newTitle = `${previousTitle}, ${listItems}`;
      localStorage.setItem("Title", JSON.stringify(newTitle));
      setItems(newTitle);
    } else {
      localStorage.setItem("Title", JSON.stringify(listItems));
      setItems(listItems);
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="flex justify-between ms-30 me-30">
        <Blogs
          handleBookmark={handleBookmark}
          handleReadingTime={handleReadingTime}
          handleItems={handleItems}
        />
        <Sidecard
          className="m-12"
          bookmarked={bookmarked}
          readingTime={readingTime}
          items={items}
        />
      </div>
    </div>
  );
};

export default App;
