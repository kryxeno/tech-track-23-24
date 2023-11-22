import Image from "next/image"
import styled from "styled-components"

const LargeTimeline = () => {
  return (
    <Wrapper>
      <h1>Large Timeline</h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #666;
  padding: 3rem 5rem;
`

export default LargeTimeline
