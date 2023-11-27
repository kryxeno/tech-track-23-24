import LinePlot from "@/components/d3/line-plot"
import * as d3 from "d3"
import { MouseEvent, useState } from "react"
import styled from "styled-components"

const Hw1 = () => {
  const [_data, set_Data] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin))

  const onMouseMove = (event: MouseEvent) => {
    const [x, y] = d3.pointer(event)
    set_Data(_data.slice(-200).concat(Math.atan2(x, y)))
  }

  return (
    <ProjectWrapper onMouseMove={onMouseMove}>
      <h3>A lineplot following the mouse</h3>
      <LinePlot data={_data} />
    </ProjectWrapper>
  )
}

export const ProjectWrapper = styled.div`
  padding: 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default Hw1
