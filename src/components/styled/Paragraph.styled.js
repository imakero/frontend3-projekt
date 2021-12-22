import styled from "styled-components"

export const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({ light }) => (light ? "white" : "black")};
`
