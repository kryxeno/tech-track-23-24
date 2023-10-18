import _ from "lodash"

export interface SurveyItem {
  [key: string]: unknown
}

export const parseSurveyData = (data: SurveyItem[]) => {
  const surveyData = _.cloneDeep(data)
  parseKeys(surveyData)
  return surveyData
}

const parseKeys = (data: SurveyItem[]) => {
  data.map((item) => {
    console.log(item)
    Object.keys(item).forEach((key) => {
      let newKey = key.replace(/ /g, "_").toLowerCase()

      if (newKey.includes("wat_wilde_je")) newKey = "droombaan"
      if (newKey.includes("wat_was_je")) newKey = "dag_2"

      item[newKey] = item[key]
      delete item[key]
    })
    return item
  })
}

export default parseSurveyData
