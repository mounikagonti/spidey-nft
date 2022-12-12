import React from "react";
import ECollections from "../modules/ecollections/ECollections";
// import ECollections from "../modules/ecollections/Ecollections";
import Header from "../modules/header/Header";

const collections = () => {
  return (
    <div>
      <Header />
      <ECollections />
    </div>
  );
};

export default collections;
