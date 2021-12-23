import styled from "styled-components"

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.nav};
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;
`

export const NavLi = styled.li`
  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.75;
  }
`
