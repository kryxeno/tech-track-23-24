import { Launch, Rocket } from "@/data/api/v4"
import { hashToIndex } from "@/utils/random"
import { Close } from "grommet-icons"
import Image from "next/image"
import styled from "styled-components"

const LaunchDetail = ({
  launch,
  launches,
  rockets,
  year,
  clear
}: {
  launch: string
  launches: Launch[]
  rockets: Rocket[]
  year: number
  clear: () => void
}) => {
  const currentLaunch = launches.find((l) => l.id === launch)
  const currentRocket = rockets.find((l) => l.id === currentLaunch!.rocket)
  if (!currentRocket) return null

  const bgImage =
    currentRocket.images[
      hashToIndex(currentLaunch!.id, currentRocket.images.length)
    ]

  return (
    <Wrapper id="contentbox">
      <Image
        src={bgImage}
        alt="Spacex rocket"
        fill={true}
        style={{ zIndex: "-1", objectFit: "cover" }}
      />
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
          <Info>
            <b>Rocket:</b> {currentRocket.name}
          </Info>
          <Info>
            <b>Mission status:</b>{" "}
            {currentLaunch.success ? "Success" : "Failure"}
          </Info>
          <Info>
            <b>Date:</b> {new Date(currentLaunch.date_utc).toUTCString()}
          </Info>
          <Info>
            <b>Flight number:</b> {currentLaunch.flight_number}
          </Info>
          {currentLaunch.cores.map((c, index) => (
            <Info key={index}>
              <b>
                Landing {index === 0 ? "central" : `outer (${index})`} core:
              </b>{" "}
              {c.landing_success ? "Success" : "Failure"}
            </Info>
          ))}
        </>
      )}
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

export const Header = styled.header`
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

export default LaunchDetail
