import styled from "styled-components"
import DynamicHeader from "./dynamic-header"
import Navigation from "./navigation"

const Layout = ({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <>
      <DynamicHeader title={title} />
      <Wrapper>
        <Navigation page={title} />
        <Content id="contentbox">{children}</Content>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
`

const Content = styled.section`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default Layout
