import React from "react";
import { Route, Routes } from "react-router-dom";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import Pagenation from "./Pagenation/Pagenation";
import ReactJs from "./ReactJs";
import Redux from "./Redux/Redux";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ReactJs />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/1" element={<Pagenation />} />
        <Route path="/2" element={<InfiniteScroll />} />
      </Routes>
    </>
  );
};

export default App;
