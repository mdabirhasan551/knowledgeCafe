import React from "react";
import { Button } from "react-daisyui";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Sidecard from "./components/Sidecard/Sidecard";

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-between ms-30 me-30">
        <Blogs />
        <Sidecard className="m-12" />
      </div>
    </div>
  );
};

export default App;
