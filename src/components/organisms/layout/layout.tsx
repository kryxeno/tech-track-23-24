import styled from "styled-components"
import DynamicHeader from "./dynamic-header"
import Navigation from "./navigation"

const Layout = ({
  children,
  title,
  padding
}: {
  children: React.ReactNode
  title: string
  padding?: string
}) => {
  return (
    <>
      <DynamicHeader title={title} />
      <Wrapper>
        <Navigation page={title} />
        <Content id="contentbox" $padding={padding}>
          {children}
        </Content>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
`

const Content = styled.section<{ $padding?: string }>`
  padding: ${({ $padding }) => $padding ?? `3rem 5rem`};
  width: 100%;
  height: 100%;
`

export default Layout
