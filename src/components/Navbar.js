import { NavLink } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { winDimContext } from '../App';

function Navbar(props) {

  const winSize = useContext(winDimContext);

  useEffect(() => {
    if (winSize.x >= 780) props.toggleSideNav(false);
    // eslint-disable-next-line
  }, [winSize])

  function openSideNav() {
    // on click, show sidenav
    if (props.showSideNav) props.toggleSideNav(false);
    else props.toggleSideNav(true);
  }
  // desktop screen size
  if (winSize.x > 780) {
    return(
      <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <div className="navbar-brand">
            React Portfolio
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link" activeClassName="active">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  // mobile screen size
  else {
    return(
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            React Portfolio
          </div>
          <button className="btn" style={{color:"lightgrey"}} onClick={openSideNav}>
            <span>Menu</span>
          </button>
        </div>
      </nav>
    )
  }

}

export default Navbar;