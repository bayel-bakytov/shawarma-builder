import React from "react";
import Layout from "./containers/Layout/Layout";
import ShawarmaBuilder from "./containers/ShawarmaBuilder/ShawarmaBuilder";
import Checkout from "./containers/Checkout/Checkout";
import "./App.css";

export default () => {
  return (
    <div className="App">
      <Layout>
        <ShawarmaBuilder />
        <Checkout />
      </Layout>
    </div>
  );
};
