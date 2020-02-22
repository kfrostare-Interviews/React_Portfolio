import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Hello from "./Hello";
import About from "./About";
import Projects from "./Projects";
import Cv from "./Cv";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "./components/Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/cv" component={Cv}></Route>
        <Route exact path="/reviews" component={Reviews}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Footer />
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);