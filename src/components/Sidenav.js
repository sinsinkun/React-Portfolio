import { NavLink } from 'react-router-dom';

const sideNavCSS = {
  position: "fixed",
  backgroundColor: "rgb(43,47,51)",
  height: "calc(100vh - 7rem)",
  top:"3.5rem",
  right:"0",
  width:"50vw",
  zIndex:"10",
  textAlign:"right",
  padding:"0.2rem 1rem"
}

function SideNav() {
  return(
    <div style={sideNavCSS}>
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