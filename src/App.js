import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

const AppComponent = () => {
  return (
    <>
      <Header />
      <CardContainer />
      {/* <Footer /> */}
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
