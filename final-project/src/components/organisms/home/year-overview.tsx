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
  launch: string
  launches: Launch[]
  rockets: Rocket[]
  year: number
  clear: () => void
}) => {
  return (
    <Wrapper id="contentbox">
      <Header>
        <h1>SpaceX Launches</h1>
      </Header>
      <p>
        This website is a timeline of all SpaceX launches. Click on a launch to
        see more information.
      </p>
    </Wrapper>
  )
}

export default YearOverview
