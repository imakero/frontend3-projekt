import { Container } from "../components/styled/Container.styled"
import { Header2 } from "../components/styled/Header2.styled"
import { Paragraph } from "../components/styled/Paragraph.styled"

const WelcomePage = () => {
  return (
    <Container>
      <Header2>Välkommen</Header2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        consequatur beatae ducimus pariatur odio consectetur, sequi molestiae
        sed voluptates ipsam? Tempora illum harum accusamus soluta ex,
        recusandae dolorum voluptate voluptatibus.
      </Paragraph>
    </Container>
  )
}

export default WelcomePage
