import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/App.css";
// import "./styles/bootstrap.css";
import BaseLayout from "./container/BaseLayout";
import About from "./container/About";
import Contact from "./container/Contact";
import Home from "./container/Home";
import ProductLine from "./container/ProductLine";
import ProductDetail from "./components/ProductDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />

          <Route path="/:productline/:id" component={ProductDetail} />
          <Route path="/:productline" component={ProductLine} />
          <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}
export default App;
