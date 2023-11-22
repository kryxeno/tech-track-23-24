import { getAllDaysInYear, monthNumberToShorthand } from "@/utils/date"
import { getRocketImage } from "@/utils/image"
import Image from "next/image"
import React, { useRef, useState } from "react"
import styled from "styled-components"

const SmallTimeline = ({ launches, rockets, scrollRef }: any) => {
  const [size, setSize] = useState(1)
  const initialYear =
    launches.length > 0 ? launches[0].date_utc.slice(0, 4) : ""

  const { start, end } = launches.reduce(
    (uniqueYears: { start: string; end: string }, d: { date_utc: string }) => {
      const year = d.date_utc.slice(0, 4)
      if (uniqueYears.start === "" || uniqueYears.start > year) {
        uniqueYears.start = year
      }
      if (uniqueYears.end === "" || uniqueYears.end < year) {
        uniqueYears.end = year
      }
      return uniqueYears
    },
    { start: initialYear, end: initialYear }
  )

  return (
    <Wrapper>
      <div>
        <button
          onClick={() => {
            scrollRef.current.scrollLeft = 0
          }}
        >
          {"<<"}
        </button>
        <button
          onClick={() => {
            scrollRef.current.scrollLeft -= 250
          }}
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            scrollRef.current.scrollLeft += 250
          }}
        >
          {">"}
        </button>
        <button
          onClick={() => {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
          }}
        >
          {">>"}
        </button>
        <p>
          Zoom: <br />
          {size}
        </p>
        <button onClick={() => setSize((prevSize) => prevSize + 0.5)}>+</button>
        <button
          onClick={() =>
            setSize((prevSize) =>
              prevSize === 0.5 ? prevSize : prevSize - 0.5
            )
          }
        >
          -
        </button>
      </div>
      <TimelineWrapper ref={scrollRef}>
        {Array.from({ length: end - start + 1 }, (_, yearIndex) => {
          const year = parseInt(start) + yearIndex
          const { daysInYear, monthDays } = getAllDaysInYear(year)
          return (
            <Year key={yearIndex}>
              <div>
                <h2>{year}</h2>
              </div>
              {daysInYear.map(({ date }, dayIndex) => {
                const launchesThisDay = launches.filter(
                  (d: { date_utc: string }) =>
                    d.date_utc.slice(0, 10) === date.toISOString().slice(0, 10)
                )
                return (
                  <Day
                    key={dayIndex}
                    week={date.getDay() === 1 ? dayIndex + 1 : undefined}
                    year={year}
                    size={size}
                    id={
                      monthDays[dayIndex + 1]
                        ? `${year}${monthNumberToShorthand(
                            monthDays[dayIndex + 1]
                          )}`
                        : `${year}day${dayIndex + 1}`
                    }
                  >
                    {monthDays[dayIndex + 1] && (
                      <h3>{monthNumberToShorthand(monthDays[dayIndex + 1])}</h3>
                    )}
                    {launchesThisDay.length > 0 && (
                      <RocketWrapper>
                        {launchesThisDay.map((d: any) => {
                          const rocket = rockets.find(
                            (r: any) => r.id === d.rocket
                          )
                          return (
                            <Image
                              key={d.id}
                              src={getRocketImage(rocket.name)}
                              alt="rocket"
                              fill={true}
                            />
                          )
                        })}
                      </RocketWrapper>
                    )}
                  </Day>
                )
              })}
            </Year>
          )
        })}
      </TimelineWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  overflow: hidden;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 2px solid var(--color-primary);
    p {
      background-color: var(--color-primary);
      width: 100%;
      text-align: center;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #333;
      color: #fff;
      height: 100%;
      width: 4rem;
      font-size: 2rem;
      cursor: pointer;
    }
  }
`

const TimelineWrapper = styled.section`
  display: flex;
  background-color: #333;
  white-space: nowrap;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`

const Year = styled.section`
  display: flex;
  position: relative;
  z-index: 5;

  > div {
    z-index: 5;
    position: sticky;
    left: 0;
    bottom: 0;

    h2 {
      position: absolute;
      color: #ffffff7c;
      text-transform: capitalize;
      left: 0;
      bottom: 0;
      font-size: 2rem;
      background-color: #11111150;
      padding: 0.2rem 0.6rem;
    }
  }
`

const Day = styled.section<{ week?: number; year: number; size: number }>`
  display: flex;
  transition: padding 0.3s;
  padding: 2rem calc(0.15rem * ${({ size }) => size});
  position: relative;
  background-color: ${({ year }) => (year % 2 === 1 ? `#222` : `#333`)};

  ${({ week, year }) =>
    week &&
    `
    border-left: 1px solid ${year % 2 === 1 ? `#333` : `#444`};
  `}
  h3 {
    position: absolute;
    color: #ffffff7c;
    text-transform: capitalize;
    z-index: 4;
    top: 0;
    left: 0;
    background-color: #11111150;
    padding: 0.2rem 0.6rem;
  }
`

const RocketWrapper = styled.div`
  position: absolute;
  height: 70%;
  width: 5rem;
  top: 15%;
  z-index: 3;
  left: 50%;
  translate: -50%;
`

export default SmallTimeline
