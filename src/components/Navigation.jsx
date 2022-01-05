import { useContext } from "react/cjs/react.development"
import { UserContext } from "../context/UserContext"
import NavLink from "./NavLink"
import { Header1 } from "./styled/Header1.styled"
import { Nav, NavLinks } from "./styled/Nav.styled"
import UserInfo from "./UserInfo"

const Navigation = () => {
  const { user } = useContext(UserContext)

  return (
    <Nav>
      {user ? <UserInfo /> : <Header1>Customer relations</Header1>}
      <NavLinks>
        {user ? (
          <>
            <NavLink to="/home">Hem</NavLink>
            <NavLink to="/logout">Logga ut</NavLink>
            <NavLink to="/sign-up">Ny användare</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Logga in</NavLink>
          </>
        )}
      </NavLinks>
    </Nav>
  )
}

export default Navigation
