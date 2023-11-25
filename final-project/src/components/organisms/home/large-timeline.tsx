import { Launch } from "@/data/api/v4"
import { Close } from "grommet-icons"
import styled from "styled-components"

const LargeTimeline = ({
  launch,
  launches,
  year,
  clear
}: {
  launch: string | null
  launches: Launch[]
  year: number
  clear: () => void
}) => {
  const currentLaunch = launches.find((l) => l.id === launch)

  return (
    <Wrapper>
      <Header>
        <h1>{currentLaunch?.name ?? "No launch selected"}</h1>
        <h2>{year}</h2>
        <ButtonWrapper onClick={clear}>
          <Close color="#000" />
        </ButtonWrapper>
      </Header>
      {currentLaunch && (
        <>
          <Info>{currentLaunch.details ?? <i>No details available</i>}</Info>
        </>
      )}
    </Wrapper>
  )
}
// MAKE BG IMAGE OF THE LAUNCH
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  gap: 1rem;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin-bottom: 1rem;
`

const ButtonWrapper = styled.button`
  display: flex;
  padding: 0.8rem;
  transition: all 0.3s;
  background-color: var(--color-primary);
  cursor: pointer;

  svg {
    scale: 1.1;
  }

  &:hover {
    background-color: var(--color-primary-dark);
  }
`

const Info = styled.p`
  max-width: 60rem;
  line-height: 1.8;
`

export default LargeTimeline
