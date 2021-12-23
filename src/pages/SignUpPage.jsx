import { useState } from "react"
import SignupForm from "../components/SignupForm"
import { Button } from "../components/styled/Button.styled"
import { Container } from "../components/styled/Container.styled"
import { Header2 } from "../components/styled/Header2.styled"
import { Paragraph } from "../components/styled/Paragraph.styled"
import api from "../lib/api"

const SignUpPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = (values) =>
    api
      .post("/auth/users/", values)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => setSubmitted(true), 500)
      })

  if (submitted) {
    return (
      <Container>
        <Header2>Väl registrerat!</Header2>
        <Paragraph>
          Klicka på länken i mailet för att aktivera kontot.
        </Paragraph>
      </Container>
    )
  }

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
