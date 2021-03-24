import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
import SideNav from './components/Sidenav';
import Footer from './components/Footer';
import Homepage from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import './components/style.css';

const winDimContext = React.createContext();

function App() {
  
  const [winDim, setWinDim] = useState({x:window.innerWidth, y:window.innerHeight});
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    // add listeners for window resize
    function handleDim() { setWinDim({x:window.innerWidth, y:window.innerHeight}) };
    window.addEventListener('resize', handleDim);
    // remove listeners on unmount of component
    return () => { window.removeEventListener("resize", handleDim) }
  })

  return (
    <div className="App d-flex flex-column">
      <winDimContext.Provider value={winDim}>
        <Router basename={process.env.PUBLIC_URL}>
          {/* Navbar */}
          <Navbar showSideNav={showSideNav} toggleSideNav={setShowSideNav}/>
          <SideNav showSideNav={showSideNav} toggleSideNav={setShowSideNav}/>
          {/* Main body */}
          <div className="main-body container-md">
            <Switch>
              <Route exact path="/"><Homepage /></Route>
              <Route path="/projects"><Projects /></Route>
              <Route path="/contact"><ContactMe /></Route>
              <Route><Page404 /></Route>
            </Switch>
          </div>
          {/* Footer */}
          <Footer />
        </Router>
      </winDimContext.Provider>
    </div>
  );
}

export {App, winDimContext};
