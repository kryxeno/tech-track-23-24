import ContourGeo from "@/components/d3/contour-geo"
import { ProjectWrapper } from "./project-1"
import BarChart from "@/components/d3/bar-chart"
import styled from "styled-components"
import { useState } from "react"

const Hw4 = ({ data }: { data: object[] }) => {
  const [selectedYear, setSelectedYear] = useState(2006)
  const launchesByYear: { [key: string]: object[] } = {}
  const adjustedLaunches: { [key: string]: object[] } = {}

  data.forEach((launch: any) => {
    const year = new Date(launch.date_utc).getFullYear()
    if (launchesByYear[year]) {
      launchesByYear[year].push(launch)
    } else {
      launchesByYear[year] = [launch]
    }
  })

  Object.keys(launchesByYear).forEach((year) => {
    if (parseInt(year) >= selectedYear) {
      adjustedLaunches[year] = launchesByYear[year]
    }
  })

  return (
    <ProjectWrapper>
      <h3>A bar chart made with launches per year </h3>
      <InputWrapper>
        <h4>Launches from year:</h4>
        <label htmlFor="year">
          <span>{Object.keys(launchesByYear)[0]}</span>
          <span className="bold">Selected: {selectedYear}</span>
          <span>{Object.keys(launchesByYear).at(-1)}</span>
        </label>
        <input
          id="year"
          name="year"
          type="range"
          min={Object.keys(launchesByYear)[0]}
          max={Object.keys(launchesByYear).at(-1)}
          onChange={(e) => setSelectedYear(e.target.valueAsNumber)}
          value={selectedYear}
        />
      </InputWrapper>
      <BarChart data={adjustedLaunches} />
    </ProjectWrapper>
  )
}

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  input[type="range"] {
    margin-top: 0.5rem;
    &::-webkit-slider-runnable-track {
      background: var(--color-pastel);
      border-radius: 20rem;
      height: 1rem;
    }
    &::-webkit-slider-thumb {
      border-radius: 20rem;
      -webkit-appearance: none; /* Override default look */
      appearance: none;

      /*custom styles*/
      background-color: var(--color-primary);
      width: 1rem;
      aspect-ratio: 1;
    }
    &::-moz-range-thumb {
      border-radius: 20rem;
      background-color: var(--color-primary);
      width: 1rem;
      aspect-ratio: 1;
    }
    &::-moz-range-track {
      background: var(--color-pastel);
      border-radius: 20rem;
    }
  }

  label {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      font-weight: 300;
      font-style: italic;
      &.bold {
        font-weight: 600;
        font-style: normal;
      }
    }
  }
`

export default Hw4
