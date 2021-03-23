import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Page404 from './components/Page404';
import SideNav from './components/Sidenav';
import Footer from './components/Footer';

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
    <div className="App d-flex flex-column" style={{minHeight:"100vh", backgroundColor:"rgb(230,235,240)"}}>
      <winDimContext.Provider value={winDim}>
        <Router basename={process.env.PUBLIC_URL}>
          {/* Navbar */}
          <Navbar showSideNav={showSideNav} toggleSideNav={setShowSideNav}/>
          {showSideNav ? <SideNav /> : ''}
          {/* Main body */}
          <div className="container-md">
            <Switch>
              <Route exact path="/"><Homepage /></Route>
              <Route><Page404 /></Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </winDimContext.Provider>
    </div>
  );
}

export {App, winDimContext};
