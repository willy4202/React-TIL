import React from "react";
import { Route, Routes } from "react-router-dom";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import Pagenation from "./Pagenation/Pagenation";
import Redux from "./Redux";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Redux />} />
        <Route path="/1" element={<Pagenation />} />
        <Route path="/2" element={<InfiniteScroll />} />
      </Routes>
    </>
  );
};

export default App;
