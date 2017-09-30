import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/App.css";
// import "./styles/bootstrap.css";
import BaseLayout from "./components/BaseLayout";
import About from "./container/About";
import Contact from "./container/Contact";
import Home from "./container/Home";
import Apparel from "./container/Apparel";
import Decor from "./container/Decor";
import Food from "./container/Food";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/apparel" component={Apparel} />
            <Route path="/decor" component={Decor} />
            <Route path="/food" component={Food} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}
export default App;
