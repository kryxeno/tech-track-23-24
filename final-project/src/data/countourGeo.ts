import * as d3 from "d3"
import { MutableRefObject } from "react"

export const createContourGeo = (
  geoRef: MutableRefObject<SVGSVGElement | null>,
  data: any
) => {
  if (geoRef.current) geoRef.current.innerHTML = ""
  const n = data.width
  const m = data.height
  const width = 928
  const height = Math.round((m / n) * width)
  const path = d3.geoPath().projection(d3.geoIdentity().scale(width / n))
  const contours = d3.contours().size([n, m])
  const color = d3
    .scaleSequential(d3.interpolateTurbo)
    .domain(d3.extent(data.values) as Iterable<number>) as any

  const svg = d3
    .select(geoRef.current)
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;")

  svg
    .append("g")
    .attr("stroke", "black")
    .selectAll()
    .data(color.ticks(30))
    .join("path")
    .attr("d", (d: any) => path(contours.contour(data.values, d)))
    .attr("fill", color)

  return svg.node()
}
