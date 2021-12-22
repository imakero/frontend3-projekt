import { Link } from "react-router-dom"
import { NavLi } from "./styled/Nav.styled"

const NavLink = ({ to, children }) => {
  return (
    <NavLi>
      <Link to={to}>{children}</Link>
    </NavLi>
  )
}

export default NavLink
