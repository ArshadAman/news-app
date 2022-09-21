import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(10)
  
    return (
      <>
        <Router>
        <LoadingBar
        color='#d14949'
        progress={progress}
      />
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}  
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />{" "}
            </Route>
            <Route exact path="/business">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}  
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />{" "}
            </Route>
            <Route exact path="/sports">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}  
                key="sports"
                pageSize={5}
                country="in"
                category="sports"
              />{" "}
            </Route>
            <Route exact path="/entertainment">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}  
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />{" "}
            </Route>
            <Route exact path="/science">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}  
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />{" "}
            </Route>
            <Route exact path="/health">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}  
                key="health"
                pageSize={5}
                country="in"
                category="health"
              />{" "}
            </Route>
            <Route exact path="/technology">
              {" "}
              <News setProgress={setProgress} apiKey={apiKey}  
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />{" "}
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
export default App;
