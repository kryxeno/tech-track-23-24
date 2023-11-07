import ContourGeo from "@/components/d3/contour-geo"
import { ProjectWrapper } from "./project-1"
import BarChart from "@/components/d3/bar-chart"

const Hw4 = ({ data }: { data: object[] }) => {
  const launchesByYear: { [key: string]: object[] } = {}

  data.forEach((launch: any) => {
    const year = new Date(launch.date_utc).getFullYear()
    if (launchesByYear[year]) {
      launchesByYear[year].push(launch)
    } else {
      launchesByYear[year] = [launch]
    }
  })

  return (
    <ProjectWrapper>
      <h3>A bar chart made with launches per year </h3>
      <BarChart data={launchesByYear} />
    </ProjectWrapper>
  )
}

export default Hw4
