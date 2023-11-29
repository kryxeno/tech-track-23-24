import LineChart from "@/components/d3/line-chart"
import SuccessChart from "@/components/d3/success-chart"
import Label from "@/components/molecules/label"
import Core from "@/components/svg/core"
import { Launch, Rocket } from "@/data/api/v4"
import { getConsecutiveStats, getSuccessPercentage } from "@/utils/launch"
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

  const { rocketSuccess, launchSuccess, rocketFailures, totalFailures } =
    getConsecutiveStats(launches, currentLaunch)

  const successPercentage = getSuccessPercentage(launches, currentLaunch)

  return (
    <Wrapper success={currentLaunch.success}>
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
          <Cores>
            {currentLaunch.cores.map((core, index) => (
              <CoreWrapper
                key={index}
                style={{
                  order:
                    currentLaunch.cores.length > 1 && index === 1
                      ? "-1"
                      : "unset"
                }}
              >
                <Core success={core.landing_success} flights={core.flight} />
                <p>
                  {currentLaunch.cores.length > 1 && index === 1
                    ? "L"
                    : index === 2
                    ? "R"
                    : "C"}
                </p>
              </CoreWrapper>
            ))}
          </Cores>
        </Content>
        <Content>
          <h2>Launch details</h2>
          <h4>{currentRocket.name}</h4>
          {currentLaunch.success ? (
            <>
              <Label
                text={
                  <>
                    <strong>{numberWithOrdinal(launchSuccess)}</strong>{" "}
                    consecutive mission success
                  </>
                }
              />
              <Label
                text={
                  <>
                    <strong>{numberWithOrdinal(rocketSuccess)}</strong>{" "}
                    consecutive {currentRocket.name} success
                  </>
                }
              />
            </>
          ) : (
            <>
              <Label
                text={
                  <>
                    <strong>{numberWithOrdinal(totalFailures)}</strong> mission
                    failure
                  </>
                }
              />
              <Label
                text={
                  <>
                    <strong>{numberWithOrdinal(rocketFailures)}</strong>{" "}
                    {currentRocket.name} failure
                  </>
                }
              />
            </>
          )}
          <p style={{ margin: "0.5rem 0" }}>
            Launched on{" "}
            <strong>{new Date(currentLaunch.date_utc).toDateString()}</strong>
          </p>
          <h4>Mission debrief</h4>
          <p id="contentbox" style={{ maxHeight: "21dvh" }}>
            {currentLaunch.details ?? <i>No mission debrief available</i>}
          </p>
        </Content>
        <GridContent>
          <SubContent>
            <h2>Success percentile</h2>
            <PayloadContent>
              <SuccessChart
                launches={launches}
                currentLaunch={{
                  date: new Date(currentLaunch.date_utc),
                  successPercentage
                }}
              />
            </PayloadContent>
          </SubContent>
          {currentLaunch.payloads && currentLaunch.payloads[0] && (
            <SubContent>
              <h2>Payload</h2>
              <PayloadContent>
                <LineChart
                  launches={launches}
                  currentLaunch={{
                    date: new Date(currentLaunch.date_utc),
                    weight:
                      currentLaunch.payloads?.reduce(
                        (acc, cur) => acc + cur.mass,
                        0
                      ) ?? 0
                  }}
                />
                <QuestionWrapper>
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
                </QuestionWrapper>
              </PayloadContent>
            </SubContent>
          )}
        </GridContent>
      </ContentWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.section<{ success?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  gap: 1rem;
  background: linear-gradient(
    90deg,
    rgb(255, 255, 255) 30%,
    ${({ success }) =>
        success === undefined
          ? `rgb(255, 255, 255, 0.6)`
          : success
          ? `rgba(186, 233, 168, 0.6)`
          : `rgba(235, 183, 183, 0.6)`}
      100%
  );
  position: relative;
  overflow: hidden;
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
  grid-template-columns: 12rem 1fr 1.2fr;
  grid-template-rows: 1fr;
  gap: 3rem;
`

const Content = styled.section`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: fit-content;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    left: -1rem;
    right: -1rem;
    bottom: -1rem;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, var(--color-primary) 100%);
    border-radius: var(--border-radius-l);
    transition: opacity 0.3s;
    opacity: 0;
    z-index: -1;
  }

  &:hover::after {
    opacity: 0.3;
  }
`

const GridContent = styled(Content)`
  display: grid;
  grid-template-rows: 50% 50%;
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
  padding: 0.2rem 0.5rem;
  border-radius: var(--border-radius-s);
  margin-right: 0.5rem;
  color: #fff;
`

const Cores = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin-top: 1rem;
  gap: 0.5rem;
`

const CoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  svg {
    height: 35dvh;
  }
`

const PayloadContent = styled.div`
  display: flex;
  height: 80%;
  margin-top: 0.5rem;
`

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 15rem;
`

const SubContent = styled.section``

export default LaunchDetail
