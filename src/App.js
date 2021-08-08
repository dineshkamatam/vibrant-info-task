import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePost from "./components/AddPost";
import EditPost from "./components/EditPost";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <header>
          <Navbar />
        </header>
        <ToastContainer />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create-post" exact>
            <CreatePost />
          </Route>
          <Route path="/edit-post/:id" exact>
            <EditPost />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
