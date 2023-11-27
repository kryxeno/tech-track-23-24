import { createD3Chart } from "@/data/d3chart"
import { useEffect, useRef, useState } from "react"
import chartData from "@/data/chartData.json"

const PhysicsChart = () => {
  const chartRef = useRef<SVGSVGElement | null>(null)
  const data = chartData

  useEffect(() => {
    createD3Chart(chartRef, data)
  }, [data])

  return <svg ref={chartRef} />
}

export default PhysicsChart
