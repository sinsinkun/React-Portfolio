import { NavLink } from 'react-router-dom';

function Navbar() {

  return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
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

export default Navbar;