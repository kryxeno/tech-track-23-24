import styled from "styled-components"
import DynamicHeader from "./dynamic-header"
import Navigation from "./navigation"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DynamicHeader />
      <Wrapper>
        <Navigation />
        <Content>{children}</Content>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main``

const Content = styled.section``

export default Layout
