import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import useResizeObserver from "../hooks/useResizeObserver"
import { Launch } from "@/data/api/v4"
import createSuccessChart, { updateSuccessLine } from "@/data/successChart"
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

  const parsedLaunches = launches
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
    createSuccessChart(svgRef, parsedLaunches, dimensions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions])

  useEffect(() => {
    if (!svgRef || !dimensions) return
    updateSuccessLine(svgRef, parsedLaunches, currentLaunch, dimensions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions, currentLaunch])

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
