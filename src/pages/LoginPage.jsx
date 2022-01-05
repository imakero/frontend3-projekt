import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Form } from "../components/Form"
import FormInput from "../components/FormInput"
import { Button } from "../components/styled/Button.styled"
import { Container } from "../components/styled/Container.styled"
import { Header2 } from "../components/styled/Header2.styled"
import api from "../lib/api"

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.search) {
      const serachParams = new URLSearchParams(location.search)
      const uid = serachParams.get("uid")
      const token = serachParams.get("token")
      api.post("/auth/users/activate/", { uid, token }).then(navigate("/login"))
      return <div>verifying...</div>
    }
  }, [location.search, navigate])

  function onSubmit(values) {
    api
      .post("/api-token-auth/", values)
      .then((res) => res.json())
      .then((data) => {
        const { token } = data
        if (token) {
          localStorage.setItem("js3-project-token", token)
        }
        navigate("/home")
      })
  }

  return (
    <Container>
      <Header2>Logga in</Header2>
      <Form initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
        <FormInput name="email" type="email" label="Email" />
        <FormInput name="password" type="password" label="Password" />
        <Button type="submit">Logga in</Button>
      </Form>
    </Container>
  )
}

export default LoginPage
