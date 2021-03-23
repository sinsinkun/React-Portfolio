import { NavLink } from 'react-router-dom';
import './style.css';

function SideNav() {
  return(
    <div className="side-nav">
      <div className="navbar-collapse navbar-dark">
        <ul className="navbar-nav">
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
    </div>
  )
}

export default SideNav;