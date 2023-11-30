import styled from "styled-components"
import { Header, Wrapper } from "./launch-detail"
import yearMapping from "@/mappings/year-mapping"
import Image from "next/image"
import Label from "@/components/molecules/label"

const YearOverview = ({ year }: { year: number }) => {
  const { title, story, image, src } = yearMapping[year] ?? {
    title: null,
    story: null,
    image: null
  }
  return (
    <Wrapper id="contentbox">
      <Image
        src={image ?? "/d"}
        alt="Spacex rocket"
        fill={true}
        style={{ zIndex: "-1", objectFit: "cover" }}
      />
      <YearHeader>
        <h2>{year}</h2>
        <h1>{title ?? "Spacex launches"}</h1>
      </YearHeader>
      <Description>
        {story}
        <p style={{ fontSize: "0.9rem", marginBottom: "2rem" }}>
          <em>- {src ?? "Wikipedia (History of SpaceX)"}</em>
        </p>
        <Label question text="Click on a launch to see more information." />
      </Description>
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

const Description = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default YearOverview
