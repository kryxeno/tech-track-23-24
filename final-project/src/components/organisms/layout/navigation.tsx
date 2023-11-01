import ButtonMenu from "@/components/molecules/button-menu"
import navMapping from "@/mappings/nav-mapping"
import Link from "next/link"
import styled from "styled-components"

const Navigation = ({ page }: { page: string }) => (
  <Wrapper>
    <NavList>
      {navMapping.map(({ label, path }) => (
        <li key={label}>
          <NavLink href={path} $active={label === page}>
            {label}
          </NavLink>
        </li>
      ))}
    </NavList>
    <ButtonMenu options={["github", "linkedin", "hva"]} />
  </Wrapper>
)

const Wrapper = styled.nav`
  padding: 2rem 4rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: var(--sidebar-width);
  background-color: var(--color-background-dark);
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    border-bottom: 1px solid var(--color-primary);

    &:first-child {
      border-top: 1px solid var(--color-primary);
    }
  }
`

const NavLink = styled(Link)<{ $active: boolean }>`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.3rem;
  padding: 1rem;
  padding-left: 0;
  transition: translate 0.3s;

  &:hover {
    translate: 0.2rem 0;
  }

  ${({ $active }) =>
    $active &&
    `
      color: var(--color-primary);
    `}
`

export default Navigation
