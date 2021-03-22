import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Page404 from './components/Page404';

const winDimContext = React.createContext();

function App() {
  
  const [winDim, setWinDim] = useState({x:window.innerWidth, y:window.innerHeight});

  useEffect(() => {
    // add listeners for window resize
    function handleDim() { setWinDim({x:window.innerWidth, y:window.innerHeight}) };
    window.addEventListener('resize', handleDim);

    // remove listeners on unmount of component
    return () => { window.removeEventListener("resize", handleDim) }
  })

  return (
    <div className="App">
      <winDimContext.Provider value={winDim}>
        <Router basename={process.env.PUBLIC_URL}>
          {/* Navbar */}
          <Navbar />
          {/* Main body */}
          <div className="container-md">
            <Switch>
              <Route exact path="/"><Homepage /></Route>
              <Route><Page404 /></Route>
            </Switch>
          </div>
        </Router>
      </winDimContext.Provider>
    </div>
  );
}

export {App, winDimContext};
