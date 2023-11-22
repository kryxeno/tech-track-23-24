import Hw1 from "@/components/organisms/homework/project-1"
import Hw2 from "@/components/organisms/homework/project-2"
import Hw3 from "@/components/organisms/homework/project-3"
import Hw4 from "@/components/organisms/homework/project-4"
import Layout from "@/components/organisms/layout/layout"
import axios from "axios"
import styled from "styled-components"

interface Props {
  data: object[]
}

export const getServerSideProps = async () => {
  const res = await axios.get("https://api.spacexdata.com/v5/launches")

  return {
    props: {
      data: res.data
    }
  }
}

const Home = ({ data }: Props) => {
  return (
    <Layout title="Projects">
      <Header>
        <h1>Homework projects</h1>
        <p>These are D3 visualisations made during the semester.</p>
        <hr />
      </Header>
      <h2 style={{ marginTop: "1rem" }}>
        Templates from D3 to get a grip on its dom events
      </h2>
      <Hw1 />
      <Hw2 />
      <Hw3 />
      <h2 style={{ marginTop: "1rem" }}>Self made charts using spacex data</h2>
      <Hw4 data={data} />
    </Layout>
  )
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default Home
