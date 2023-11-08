import { useEffect, useRef, useState } from "react"
import { createContourGeo } from "@/data/countourGeo"
import createBarChart from "@/data/barChart"
import styled from "styled-components"
import useResizeObserver from "../hooks/useResizeObserver"

const BarChart = ({ data }: { data: { [key: string]: object[] } }) => {
  const containerRef = useRef(null)
  const svgRef = useRef(null)

  const { dimensions } = useResizeObserver(containerRef)

  useEffect(() => {
    if (!dimensions) return
    console.log(dimensions)

    createBarChart(svgRef, data, dimensions)
  }, [data, dimensions])

  return (
    <Wrapper ref={containerRef}>
      <Svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </Svg>
    </Wrapper>
  )
}

const Svg = styled.svg`
  height: 100%;
  width: 100%;
  overflow: visible;
  background-color: var(--color-pastel);
  border-top-right-radius: 20rem;
`

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  padding: 2rem;
`

export default BarChart
