import * as d3 from "d3"
import { MutableRefObject } from "react"

const createBarChart = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  data: {
    [key: string]: object[]
  },
  dimensions: { width: number; height: number }
) => {
  if (!data) return
  const svg = d3.select(svgRef.current)

  const x: number[] = []
  const barData: number[] = []

  console.log({ x, barData })

  Object.keys(data).forEach((key) => {
    x.push(parseInt(key))
  })

  Object.keys(data).forEach((key) => {
    barData.push(data[key].length)
  })

  const xScale = d3
    .scaleBand()
    .domain(x as unknown as string[])
    .range([0, dimensions.width])
    .padding(0.25)

  const yScale = d3.scaleLinear().domain([0, 50]).range([dimensions.height, 0])
  const colorScale = d3
    .scaleLinear()
    .domain([0, 50])
    .range(["#ec8431", "blue"] as any)

  const xAxis = d3.axisBottom(xScale)

  svg
    .select(".x-axis")
    .style("transform", `translateY(${dimensions.height}px)`)
    .call(xAxis as any)

  const yAxis = d3.axisRight(yScale).tickSize(dimensions.width)

  svg
    .select(".y-axis")
    .call(yAxis as any)
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick:not(:first-of-type) line")
        .attr("stroke-opacity", 0.5)
        .attr("stroke-dasharray", "2,2")
    )
    .call((g) => g.selectAll(".tick text").attr("x", 4).attr("dy", -4))

  svg
    .selectAll(".bar")
    .data(barData)
    .join("rect")
    .attr("class", "bar")
    .style("transform", "scale(1, -1)")
    .attr("x", (d, i) => xScale(x[i] as any) as any)
    .attr("y", -dimensions.height)
    .attr("width", xScale.bandwidth())
    .on("mouseenter", (event, value) => {
      const bar = d3.select(event.currentTarget)

      svg
        .selectAll(".tooltip")
        .data([value])
        .join((enter) => enter.append("text").attr("y", yScale(value) - 8))
        .attr("class", "tooltip")
        .text(value)
        .attr("x", parseInt(bar.attr("x")) + xScale.bandwidth() / 2)
        .attr("text-anchor", "middle")
        .transition()
        .attr("y", yScale(value) - 12)
        .attr("opacity", 1.0)
    })
    .on("mouseleave", (value, index) => {
      svg.select(".tooltip").remove()
    })
    .transition()
    .duration(1000)
    .attr("fill", colorScale)
    .attr("height", (d) => dimensions.height - yScale(d))
}

export default createBarChart
