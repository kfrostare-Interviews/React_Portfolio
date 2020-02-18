import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";

const App = () => {
  return (
    <div>
      <Header />
      <Hello />
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);