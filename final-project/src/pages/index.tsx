import LaunchDetail from "@/components/organisms/home/launch-detail"
import SmallTimeline from "@/components/organisms/home/small-timeline"
import Layout from "@/components/organisms/layout/layout"
import { onWheel } from "@/utils/mouse"
import { InferGetServerSidePropsType } from "next"
import { useRef, useState } from "react"
import styled from "styled-components"
import { getLaunches, getRockets } from "@/data/api/v4"
import YearOverview from "@/components/organisms/home/year-overview"

export const getServerSideProps = async () => {
  const launches = await getLaunches()
  const rockets = await getRockets()
  return {
    props: {
      launches,
      rockets
    }
  }
}

const Home = ({
  launches,
  rockets
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [launch, setLaunch] = useState<string | null>(null)
  const [year, setYear] = useState(launches[0]?.year)
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <Layout title="Home" padding="0">
      <Grid onWheel={(e) => onWheel(e as unknown as WheelEvent, scrollRef)}>
        {launch ? (
          <LaunchDetail
            launches={launches}
            launch={launch}
            rockets={rockets}
            year={year}
            clear={() => setLaunch(null)}
          />
        ) : (
          <YearOverview launches={launches} />
        )}

        <SmallTimeline
          selectedLaunch={launch}
          launches={launches}
          rockets={rockets}
          scrollRef={scrollRef}
          setLaunch={setLaunch}
          setYear={setYear}
        />
      </Grid>
    </Layout>
  )
}

const Grid = styled.main`
  display: grid;
  grid-template-rows: 1fr 18rem;
`

export default Home
