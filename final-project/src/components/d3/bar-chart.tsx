import { useEffect, useRef } from "react"
import { createContourGeo } from "@/data/countourGeo"
import createBarChart from "@/data/barChart"
import styled from "styled-components"

const BarChart = ({ data }: { data: { [key: string]: object[] } }) => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    createBarChart(svgRef, data)
  }, [data])

  return (
    <Svg ref={svgRef}>
      <g className="x-axis" />
      <g className="y-axis" />
    </Svg>
  )
}

const Svg = styled.svg`
  height: 450px;
  width: 800px;
  overflow: visible;
  margin: 1rem;
  background-color: var(--color-pastel);
  border-top-right-radius: 20rem;
`

export default BarChart
