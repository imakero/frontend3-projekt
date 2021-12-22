import styled from "styled-components"

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.nav};
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
