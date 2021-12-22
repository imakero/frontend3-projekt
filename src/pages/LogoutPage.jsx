import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { Container } from "../components/styled/Container.styled"
import { Header2 } from "../components/styled/Header2.styled"
import { CustomersContext } from "../context/CustomersContext"
import { UserContext } from "../context/UserContext"

const LogoutPage = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const { setCustomers } = useContext(CustomersContext)

  useEffect(() => {
    localStorage.removeItem("js3-project-token")
    setUser(null)
    setCustomers([])
    navigate("/login")
  }, [navigate, setUser, setCustomers])

  return (
    <Container>
      <Header2>Loggar ut...</Header2>
    </Container>
  )
}

export default LogoutPage
