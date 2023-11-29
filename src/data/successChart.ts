import * as d3 from "d3"
import { MutableRefObject } from "react"

const marginTop = 20
const marginRight = 30
const marginBottom = 30
const marginLeft = 30

const createSuccessChart = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  launches: { date: Date; successPercentage: number }[],
  dimensions: { width: number; height: number }
) => {
  if (!launches) return
  console.log("CREATE IS RUNNING")

  // Template from https://observablehq.com/@d3/area-chart
  // Declare the chart dimensions and margins.
  const width = dimensions.width
  const height = dimensions.height

  // Declare the x (horizontal position) scale.
  const x = d3.scaleUtc(
    d3.extent(launches, (d) => d.date) as Iterable<d3.NumberValue>,
    [marginLeft, width - marginRight]
  )

  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear(
    [0, d3.max(launches, (d) => d.successPercentage) as d3.NumberValue],
    [height - marginBottom, marginTop]
  )

  // Declare the area generator.
  const area = d3
    .area()
    .x((d: any) => x(d.date))
    .y0(y(0))
    .y1((d: any) => y(d.successPercentage))

  // Create the SVG container.
  const svg = d3
    .select(svgRef.current)
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;")

  svg.selectAll("*").remove()

  const lg = svg
    .append("defs")
    .append("linearGradient")
    .attr("id", "gradient1") //id of the gradient
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "0%")
    .attr("y2", "100%") //since its a vertical linear gradient

  lg.append("stop")
    .attr("offset", "10%")
    .style("stop-color", "var(--color-success-dark") //start in blue
    .style("stop-opacity", 1)

  lg.append("stop")
    .attr("offset", "100%")
    .style("stop-color", "var(--color-failure-dark") //end in red
    .style("stop-opacity", 1)

  svg
    .append("path")
    .attr("fill", "url(#gradient1)")
    .attr("d", area(launches as any))

  // Add the x-axis.
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(
      d3
        .axisBottom(x)
        .ticks(width / 80)
        .tickSizeOuter(0)
    )

  // Add the y-axis, remove the domain line, add grid lines and a label.
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).ticks(height / 40))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .clone()
        .attr("x2", width - marginLeft - marginRight)
        .attr("stroke-opacity", 0.1)
    )
}

export const updateSuccessLine = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  launches: { date: Date; successPercentage: number }[],
  currentLaunch: { date: Date; successPercentage: number },
  dimensions: { width: number; height: number }
) => {
  const { width, height } = dimensions
  const svg = d3.select(svgRef.current)

  const x = d3.scaleUtc(
    d3.extent(launches, (d) => d.date) as Iterable<d3.NumberValue>,
    [marginLeft, width - marginRight]
  )

  svg
    .selectAll(".toolline")
    .data([currentLaunch])
    .join((enter) =>
      enter
        .append("line")
        .attr("class", "toolline")
        .attr("opacity", 1)
        .attr("x1", (d) => x(d.date))
        .attr("x2", (d) => x(d.date))
        .attr("y1", height - marginBottom - marginTop)
        .attr("y2", 0)
        .attr("stroke", "var(--color-primary-dark)")
        .attr("stroke-width", 2)
        .attr("transform", `translate(0, ${marginTop})`)
    )
    .transition()
    .duration(1000)
    .attr("x1", (d) => x(d.date))
    .attr("x2", (d) => x(d.date))

  svg
    .selectAll(".tooltip")
    .data([currentLaunch])
    .join((enter) =>
      enter
        .append("text")
        .attr("class", "tooltip")
        .text((d) => d.successPercentage + "%")
        .attr("fill", "black")
        .attr("x", (d) => x(d.date))
        .attr("y1", height - marginBottom - marginTop)
        .attr("text-anchor", "middle")
        .attr("transform", `translate(0,10)`)
    )
    .transition()
    .duration(1000)
    .attr("x", (d) => x(d.date))
}

export default createSuccessChart
