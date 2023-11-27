import { Launch, Rocket } from "@/data/api/v4"
import { hashToIndex } from "@/utils/random"
import { Close } from "grommet-icons"
import Image from "next/image"
import styled from "styled-components"
import { Header, Wrapper } from "./launch-detail"

const YearOverview = ({
  launches,
  rockets,
  year
}: {
  launches: Launch[]
  rockets: Rocket[]
  year: number
}) => {
  return (
    <Wrapper id="contentbox">
      <YearHeader>
        <h2>{year}</h2>
        <h1>SpaceX Launches</h1>
      </YearHeader>
      <p>
        This website is a timeline of all SpaceX launches. Click on a launch to
        see more information.
      </p>
    </Wrapper>
  )
}

const YearHeader = styled(Header)`
  justify-content: flex-start;

  h2 {
    background-color: var(--color-primary);
    padding: 0.5rem 1rem;
  }
`

export default YearOverview
