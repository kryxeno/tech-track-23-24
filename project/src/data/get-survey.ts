import axios from "axios"

// kleuren tellen:
export const getSurveyData = async () => {
  console.log("Grabbing new userdata...")
  return await axios
    .get(
      "https://opensheet.elk.sh/1bOqOXqsuALPR0U26nJu5URFzg2Js54oS7uHoMCBEZHY/responses"
    )
    .then((res) => res.data)
}
