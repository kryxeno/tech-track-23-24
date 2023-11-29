import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import useResizeObserver from "../hooks/useResizeObserver"
import createLineChart from "@/data/lineChart"
import { Launch } from "@/data/api/v4"

const LineChart = ({
  launches,
  currentLaunch
}: {
  launches: Launch[]
  currentLaunch: { date: Date; weight: number }
}) => {
  const containerRef = useRef(null)
  const svgRef = useRef(null)

  const { dimensions } = useResizeObserver(containerRef)
  const parsedData = launches
    .filter(
      (l) =>
        l.payloads &&
        l.payloads.length > 0 &&
        l.payloads?.reduce((acc, cur) => acc + cur.mass, 0) > 0
    )
    .map((l) => {
      return {
        date: new Date(l.date_utc),
        weight: l.payloads?.reduce((acc, cur) => acc + cur.mass, 0) ?? 0
      }
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  useEffect(() => {
    if (!dimensions) return
    createLineChart(svgRef, parsedData, currentLaunch, dimensions)
  }, [parsedData, currentLaunch, dimensions])

  return (
    <Wrapper ref={containerRef}>
      <Svg ref={svgRef} />
    </Wrapper>
  )
}

const Svg = styled.svg`
  height: 100%;
  width: 100%;
  overflow: visible;
  text {
    font-family: var(--font-family);
    font-size: 0.9rem;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default LineChart
