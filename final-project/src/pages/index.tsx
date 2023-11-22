import LargeTimeline from "@/components/organisms/home/large-timeline"
import SmallTimeline from "@/components/organisms/home/small-timeline"
import Layout from "@/components/organisms/layout/layout"
import { onWheel } from "@/utils/mouse"
import axios from "axios"
import { InferGetServerSidePropsType } from "next"
import { useRef } from "react"
import styled from "styled-components"

export const getServerSideProps = async () => {
  const launches = await axios.get("https://api.spacexdata.com/v4/launches")
  const rockets = await axios.get("https://api.spacexdata.com/v4/rockets")

  return {
    props: {
      launches: launches.data,
      rockets: rockets.data
    }
  }
}

const Home = ({
  launches,
  rockets
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(launches, rockets)

  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <Layout title="Home" padding="0">
      <Grid onWheel={(e) => onWheel(e as unknown as WheelEvent, scrollRef)}>
        <LargeTimeline />
        <SmallTimeline
          launches={launches}
          rockets={rockets}
          scrollRef={scrollRef}
        />
      </Grid>
    </Layout>
  )
}

const Grid = styled.main`
  display: grid;
  grid-template-rows: 1fr 28rem;
`

export default Home
