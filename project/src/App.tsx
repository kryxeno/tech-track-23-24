import { useEffect, useState } from "react"
import viteLogo from "/vite.svg"
import reactLogo from "/react.svg"
import { getSurveyData } from "./data/get-survey"
import styled from "styled-components"
import parseSurveyData, { SurveyItem } from "./utils/survey"

const App = () => {
  const [count, setCount] = useState(0)
  const [surveyData, setSurveyData] = useState<SurveyItem[]>()
  useEffect(() => {
    getSurveyData().then((data: SurveyItem[]) => {
      const parsedData = parseSurveyData(data)

      setSurveyData(parsedData)
    })
  }, [])

  console.log(surveyData)

  return (
    <Wrapper>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #777;
  display: flex;
  flex-direction: column;
`

export default App
