import styled from "styled-components"

export const Button = styled.button`
  padding: 1rem 1.25rem;
  border-radius: 50px;
  font-size: 1rem;
  letter-spacing: 0.0625rem;
  border: none;
  color: black;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: all 0.2s ease-in;
  opacity: 1;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
`

export const DangerButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.danger};
  color: white;
`
