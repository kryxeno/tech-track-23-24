import axios from "axios"

export interface Launch {
  flight_number: number
  id: string
  name: string
  details: string
  payloads:
    | {
        id: string
        type: string
        customers: string[]
        nationalities: string[]
      }[]
    | null
  rocket: string
  success: boolean
  cores: {
    flight: number
    legs: boolean
    reused: boolean
    landing_success: boolean
  }[]
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
  return (
    await axios.post("https://api.spacexdata.com/v5/launches/query", {
      options: {
        pagination: false,
        populate: ["payloads"]
      }
    })
  ).data.docs.map((launch: any) => {
    return {
      flight_number: launch.flight_number,
      id: launch.id,
      name: launch.name,
      details: launch.details,
      payloads: launch.payloads?.map((payload: any) => {
        return {
          id: payload.id,
          type: payload.type,
          customers: payload.customers,
          nationalities: payload.nationalities
        }
      }, []),
      rocket: launch.rocket,
      success: launch.success,
      cores: launch.cores?.map((core: any) => {
        return {
          flight: core.flight,
          legs: core.legs,
          reused: core.reused,
          landing_success: core.landing_success
        }
      }, []),
      crew: launch.crew,
      year: parseInt(launch.date_utc.slice(0, 4)),
      date_utc: launch.date_utc
    }
  })
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
