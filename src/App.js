import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import ShawarmaBuilder from "./containers/ShawarmaBuilder/ShawarmaBuilder";

export default () => {
  return (
    <div className="App">
      <Layout>
        <ShawarmaBuilder />
      </Layout>
    </div>
  );
};
