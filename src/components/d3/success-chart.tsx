import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import useResizeObserver from "../hooks/useResizeObserver"
import { Launch } from "@/data/api/v4"
import createSuccessChart from "@/data/successChart"
import { getSuccessPercentage } from "@/utils/launch"

const SuccessChart = ({
  launches,
  currentLaunch
}: {
  launches: Launch[]
  currentLaunch: { date: Date; successPercentage: number }
}) => {
  const containerRef = useRef(null)
  const svgRef = useRef(null)

  const { dimensions } = useResizeObserver(containerRef)
  const parsedData = launches
    .map((l) => {
      const success = getSuccessPercentage(launches, l)
      return {
        date: new Date(l.date_utc),
        successPercentage: success
      }
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  useEffect(() => {
    if (!dimensions) return
    createSuccessChart(svgRef, parsedData, currentLaunch, dimensions)
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

export default SuccessChart
