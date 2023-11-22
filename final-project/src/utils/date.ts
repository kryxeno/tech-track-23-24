export const getAllDaysInYear = (year: number) => {
  const daysInYear = []
  const monthDays: { [key: string]: number } = {}

  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    monthDays[daysInYear.length + 1] = month + 1

    for (let day = 1; day <= daysInMonth; day++) {
      daysInYear.push({
        date: new Date(year, month, day),
        month: month + 1
      })
    }
  }

  return { daysInYear, monthDays }
}

export const monthNumberToShorthand = (monthNumber: number) => {
  switch (monthNumber) {
    case 1:
      return "jan"
    case 2:
      return "feb"
    case 3:
      return "mar"
    case 4:
      return "apr"
    case 5:
      return "may"
    case 6:
      return "jun"
    case 7:
      return "jul"
    case 8:
      return "aug"
    case 9:
      return "sep"
    case 10:
      return "oct"
    case 11:
      return "nov"
    case 12:
      return "dec"
    default:
      return ""
  }
}
