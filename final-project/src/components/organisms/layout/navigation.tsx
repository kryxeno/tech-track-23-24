import styled from "styled-components"

const Navigation = () => {
  return (
    <Wrapper>
      <NavList></NavList>
    </Wrapper>
  )
}

const Wrapper = styled.nav``

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default Navigation
