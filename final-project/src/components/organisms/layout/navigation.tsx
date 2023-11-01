import navMapping from "@/mappings/nav-mapping"
import Link from "next/link"
import styled from "styled-components"

const Navigation = () => {
  return (
    <Wrapper>
      <NavList>
        {navMapping.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </NavList>
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
