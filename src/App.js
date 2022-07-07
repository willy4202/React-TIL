import React from "react";
import { Route, Routes } from "react-router-dom";
import Pagenation from "./Pagenation/Pagenation";
import Redux from "./Redux";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Redux />} />
        <Route path="/1" element={<Pagenation />} />
      </Routes>
    </>
  );
};

export default App;
