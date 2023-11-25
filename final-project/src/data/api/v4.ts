import axios from "axios"

export interface Launch {
  flight_number: number
  id: string
  name: string
  details: string
  launchpad: string
  payloads: string[]
  rocket: string
  success: boolean
  cores: string[]
  crew: string[]
  year: number
  date_utc: string
}

export interface Rocket {
  id: string
  name: string
  mass: {
    kg: number
  }
  cost_per_launch: number
  success_rate_pct: number
  images: string[]
}

export const getLaunches = async (): Promise<Launch[]> => {
  return (await axios.get("https://api.spacexdata.com/v4/launches")).data.map(
    (launch: any) => {
      return {
        flight_number: launch.flight_number,
        id: launch.id,
        name: launch.name,
        details: launch.details,
        launchpad: launch.launchpad,
        payloads: launch.payloads,
        rocket: launch.rocket,
        success: launch.success,
        cores: launch.cores,
        crew: launch.crew,
        year: parseInt(launch.date_utc.slice(0, 4)),
        date_utc: launch.date_utc
      }
    }
  )
}

export const getRockets = async (): Promise<Rocket[]> => {
  return (await axios.get("https://api.spacexdata.com/v4/rockets")).data.map(
    (rocket: any) => {
      return {
        id: rocket.id,
        name: rocket.name,
        mass: rocket.mass,
        cost_per_launch: rocket.cost_per_launch,
        success_rate_pct: rocket.success_rate_pct,
        images: rocket.flickr_images
      }
    }
  )
}
