import { Launch } from "@/data/api/v4"

export const getConsecutiveStats = (launches: Launch[], currLaunch: Launch) => {
  const reversePastLaunches = launches
    .filter((prevLaunch) => prevLaunch.date_utc < currLaunch.date_utc)
    .reverse()
  const rocketFailIndex = reversePastLaunches.findIndex(
    (launch) => launch.rocket === currLaunch.rocket && !launch.success
  )
  const rocketSuccess =
    rocketFailIndex === -1
      ? reversePastLaunches.filter(
          (launch) => launch.rocket === currLaunch.rocket && launch.success
        ).length + 1
      : rocketFailIndex + 1

  const launchFailIndex = reversePastLaunches.findIndex(
    (launch) => !launch.success
  )
  const launchSuccess =
    launchFailIndex === -1
      ? reversePastLaunches.filter((launch) => launch.success).length + 1
      : launchFailIndex + 1

  const rocketFailures = reversePastLaunches.filter(
    (launch) => launch.rocket === currLaunch.rocket && !launch.success
  ).length

  const totalFailures = reversePastLaunches.filter(
    (launch) => !launch.success
  ).length

  return { rocketSuccess, launchSuccess, rocketFailures, totalFailures }
}

export const getSuccessPercentage = (launches: Launch[], launch: Launch) => {
  const reversePastLaunches = launches
    .filter((prevLaunch) => prevLaunch.date_utc <= launch.date_utc)
    .reverse()

  const successPercentage = Math.round(
    (reversePastLaunches.filter((launch) => launch.success).length /
      reversePastLaunches.length) *
      100
  )
  if (isNaN(successPercentage)) return 0
  return successPercentage
}
