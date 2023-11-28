import Label from "@/components/molecules/label"
import { Launch, Rocket } from "@/data/api/v4"
import { hashToIndex } from "@/utils/random"
import { numberWithOrdinal } from "@/utils/text"
import { Close } from "grommet-icons"
import Image from "next/image"
import styled from "styled-components"

const LaunchDetail = ({
  launch,
  launches,
  rockets,
  clear
}: {
  launch: string
  launches: Launch[]
  rockets: Rocket[]
  clear: () => void
}) => {
  const currentLaunch = launches.find((l) => l.id === launch)
  const currentRocket = rockets.find((l) => l.id === currentLaunch!.rocket)
  if (!currentRocket || !currentLaunch) return null

  const bgImage =
    currentRocket.images[
      hashToIndex(currentLaunch.id, currentRocket.images.length)
    ]

  return (
    <Wrapper>
      <Image
        src={bgImage}
        alt="Spacex rocket"
        fill={true}
        style={{ zIndex: "-1", objectFit: "cover" }}
      />
      <Header $success={currentLaunch.success}>
        <h2>{currentLaunch.success ? "Success" : "Failure"}</h2>
        <Title>
          <h1>{currentLaunch.name ?? "No launch selected"}</h1>
          <h3>
            {numberWithOrdinal(currentLaunch.flight_number)} Spacex flight
          </h3>
        </Title>
        <ButtonWrapper onClick={clear}>
          <Close color="#000" />
        </ButtonWrapper>
      </Header>
      <ContentWrapper>
        <Content>
          <h2>Landing</h2>
          <p>
            <ExampleBox> #</ExampleBox>= flights old
          </p>
        </Content>
        <Content>
          <h2>Launch details</h2>
          <h4>{currentRocket.name}</h4>
          <Label
            text={
              <>
                <strong>{`30th`}</strong> consecutive mission success
              </>
            }
          />
          <Label
            text={
              <>
                <strong>{`4th`}</strong> consecutive {currentRocket.name}{" "}
                success
              </>
            }
          />
          <p style={{ margin: "0.5rem 0" }}>
            Launched on{" "}
            <strong>{new Date(currentLaunch.date_utc).toDateString()}</strong>
          </p>
          <h4>Mission debrief</h4>
          <p>{currentLaunch.details}</p>
        </Content>
        <Content>
          <h2>Launch details</h2>
          <p>Dingen</p>
          {currentLaunch.payloads && (
            <>
              <h2>Payload</h2>
              <Question>
                <h4>What is it?</h4>
                <p>{currentLaunch.payloads[0].type}</p>
              </Question>
              <Question>
                <h4>Who ordered it?</h4>
                <p>
                  {currentLaunch.payloads[0].customers}
                  <br />({currentLaunch.payloads[0].nationalities})
                </p>
              </Question>
            </>
          )}
        </Content>
      </ContentWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  gap: 1rem;
  background: linear-gradient(
    90deg,
    rgb(255, 255, 255) 30%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background-size: cover;
  background-position: center;
  position: relative;
`

export const Header = styled.header<{ $success?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;

  h2 {
    background-color: ${({ $success }) =>
      $success ? `var(--color-success-dark)` : ` var(--color-failure-dark)`};
    color: ${({ $success }) =>
      $success ? `var(--color-success-light)` : ` var(--color-failure-light)`};
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius-s);
  }
`

const ContentWrapper = styled.section`
  display: grid;
  grid-template-columns: 20rem 1fr 1fr;
  gap: 1rem;
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`

const Question = styled.section``

const ButtonWrapper = styled.button`
  display: flex;
  padding: 0.8rem;
  transition: all 0.3s;
  background-color: var(--color-primary);
  cursor: pointer;
  border-radius: var(--border-radius-s);

  svg {
    scale: 1.1;
  }

  &:hover {
    background-color: var(--color-primary-dark);
  }
`

const ExampleBox = styled.span`
  display: inline-block;
  background: linear-gradient(
    90deg,
    var(--color-success-dark) 0%,
    var(--color-failure-dark) 100%
  );
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-s);
  margin-right: 0.5rem;
  color: #fff;
`

export default LaunchDetail
