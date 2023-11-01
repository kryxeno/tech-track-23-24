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
        <Navigation />
        <Content>{children}</Content>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 10rem 1fr;
`

const Content = styled.section``

export default Layout
