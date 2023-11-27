import { useEffect, useRef } from "react"
import geoData from "@/data/geoData.json"
import { createContourGeo } from "@/data/countourGeo"

const ContourGeo = () => {
  const geoRef = useRef<SVGSVGElement | null>(null)
  const data = geoData

  useEffect(() => {
    createContourGeo(geoRef, data)
  }, [data])

  return <svg ref={geoRef} />
}

export default ContourGeo
