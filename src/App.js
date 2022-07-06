import React from "react";
import { Route, Routes } from "react-router-dom";
import Redux from "./Redux";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Redux />} />
      </Routes>
    </>
  );
};

export default App;
