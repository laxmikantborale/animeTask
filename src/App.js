import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Animedetails from "./components/Animedetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/animedetails:mal_id">
        <Animedetails/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;