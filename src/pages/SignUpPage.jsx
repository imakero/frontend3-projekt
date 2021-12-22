import SignupForm from "../components/SignupForm"
import { Button } from "../components/styled/Button.styled"
import { Container } from "../components/styled/Container.styled"
import { Header2 } from "../components/styled/Header2.styled"
import api from "../lib/api"

const SignUpPage = () => {
  const onSubmit = (values) =>
    api
      .post("/auth/users/", values)
      .then((res) => res.json())
      .then((data) => console.log(data))

  return (
    <Container>
      <Header2>Registrera ny användare</Header2>
      <SignupForm onSubmit={onSubmit}>
        <Button type="submit">Registera användare</Button>
      </SignupForm>
    </Container>
  )
}

export default SignUpPage
