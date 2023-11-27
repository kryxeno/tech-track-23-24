import { Launch, Rocket } from "@/data/api/v4"
import { getAllMonthsInYear } from "@/utils/date"
import { getRocketImage } from "@/utils/image"
import {
  AddCircle,
  ChapterNext,
  ChapterPrevious,
  FastForward,
  Rewind,
  SubtractCircle
} from "grommet-icons"
import Image from "next/image"
import React, { useState } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

interface Props {
  launches: Launch[]
  rockets: Rocket[]
  scrollRef: React.RefObject<HTMLDivElement>
  selectedLaunch: string | null
  setLaunch: (id: string) => void
  setYear: (year: number) => void
}
const SmallTimeline = ({
  launches,
  rockets,
  scrollRef,
  selectedLaunch,
  setLaunch,
  setYear
}: Props) => {
  const [size, setSize] = useState(1)

  const { start, end } = {
    start: launches[0]?.year,
    end: launches?.at(-1)?.year ?? launches[0]?.year
  }

  return (
    <Wrapper>
      <SideMenu>
        <button
          onClick={() => {
            if (scrollRef.current) scrollRef.current.scrollLeft = 0
          }}
        >
          <ChapterPrevious color="#fff" />
        </button>
        <button
          onClick={() => {
            if (scrollRef.current) scrollRef.current.scrollLeft -= 800
          }}
        >
          <Rewind color="#fff" />
        </button>
        <button
          onClick={() => {
            if (scrollRef.current) scrollRef.current.scrollLeft += 800
          }}
        >
          <FastForward color="#fff" />
        </button>
        <button
          onClick={() => {
            if (scrollRef.current)
              scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
          }}
        >
          <ChapterNext color="#fff" />
        </button>
        <button onClick={() => setSize((prevSize) => prevSize + 0.5)}>
          <AddCircle color="#fff" />
        </button>
        <p>{1 + (size - 1) * 2}</p>
        <button
          onClick={() =>
            setSize((prevSize) =>
              prevSize === 0.5 ? prevSize : prevSize - 0.5
            )
          }
        >
          <SubtractCircle color="#fff" />
        </button>
      </SideMenu>
      <TimelineWrapper ref={scrollRef}>
        {Array.from({ length: end - start + 1 }, (_, yearIndex) => (
          <Year
            key={yearIndex}
            year={start + yearIndex}
            launches={launches}
            rockets={rockets}
            size={size}
            selectedLaunch={selectedLaunch}
            setLaunch={setLaunch}
            setYear={setYear}
            scrollRef={scrollRef}
          />
        ))}
      </TimelineWrapper>
    </Wrapper>
  )
}

const Year = ({
  year,
  launches,
  rockets,
  size,
  scrollRef,
  selectedLaunch,
  setLaunch,
  setYear
}: {
  year: number
  launches: Launch[]
  rockets: Rocket[]
  size: number
  scrollRef: React.RefObject<HTMLDivElement>
  selectedLaunch: string | null
  setLaunch: (id: string) => void
  setYear: (year: number) => void
}) => {
  const monthsInYear = getAllMonthsInYear(year)
  const { ref } = useInView({
    root: scrollRef.current,
    threshold: 0.25,
    onChange: (inView) => inView && setYear(year)
  })

  return (
    <YearWrapper id={`${year}`} ref={ref}>
      <YearLabel>
        <h2>{year}</h2>
      </YearLabel>
      {monthsInYear.map(({ date, name, days }, monthIndex) => {
        const launchesThisMonth = launches.filter(
          (d) => d.date_utc.slice(0, 7) === date.toISOString().slice(0, 7)
        )

        return (
          <Month
            key={monthIndex}
            month={monthIndex}
            days={days}
            year={year}
            size={size}
            id={`${year}${name}`}
          >
            <h3>{name}</h3>
            {launchesThisMonth.length > 0 &&
              launchesThisMonth.map((launch) => {
                const rocket = rockets.find((r) => r.id === launch.rocket)
                if (!rocket) {
                  console.error(`Rocket ${launch.rocket} not found`)
                  return null
                }

                return (
                  <RocketWrapper
                    key={launch.id}
                    isSelected={selectedLaunch === launch.id}
                    relativeDay={Math.max(
                      3,
                      Math.min(
                        97,
                        (new Date(launch.date_utc).getDate() / days) * 100
                      )
                    )}
                    onClick={() => setLaunch(launch.id)}
                  >
                    <RocketSvg key={launch.id}>
                      <Image
                        src={getRocketImage(rocket.name)}
                        alt="rocket"
                        fill={true}
                      />
                      <Image src={"/smoke.png"} alt="smoke" fill={true} />
                      {rocket.name === "Falcon Heavy" && (
                        <>
                          <Image src={"/smoke.png"} alt="smoke" fill={true} />
                          <Image src={"/smoke.png"} alt="smoke" fill={true} />
                        </>
                      )}
                    </RocketSvg>
                  </RocketWrapper>
                )
              })}
          </Month>
        )
      })}
    </YearWrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  overflow: hidden;
`

const YearLabel = styled.div`
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
`

const SideMenu = styled.aside`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: 1fr;
  justify-content: center;
  width: 4rem;
  background-color: var(--color-background-dark);
  align-items: center;
  border-right: 2px solid var(--color-primary);
  border-left: 2px solid var(--color-primary);
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
    text-align: center;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.3s;
    svg {
      scale: 0.8;
    }
    &:hover {
      background-color: var(--color-primary-dark);
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

const YearWrapper = styled.section`
  display: flex;
  position: relative;
  z-index: 5;
`

const Month = styled.div<{
  days: number
  month?: number
  year: number
  size: number
}>`
  display: flex;
  transition: width 0.3s;
  padding: 2rem 0;
  width: calc(
    0.3rem * ${({ size }) => size ?? `1`} * ${({ days }) => days ?? `30`}
  );
  position: relative;
  background-color: ${({ year }) => (year % 2 === 1 ? `#222` : `#333`)};
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
  ${({ month, year }) =>
    month &&
    `
    border-left: 1px solid ${year % 2 === 1 ? `#333` : `#444`};
  `}
`

const RocketSvg = styled.div`
  height: 70%;
  translate: 0 30%;
  transition: translate 1s ease-in-out;
  position: relative;

  img:not(:first-child) {
    z-index: -1;
    translate: 4px 90%;
    scale: 10 1.5;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  img:nth-child(2) {
    transform: scaleX(-1);
    translate: -5px 90%;
  }
  img:nth-child(3) {
    translate: -4px 90%;
  }
  img:nth-child(4) {
    translate: 13px 90%;
  }
`

const RocketWrapper = styled.div<{
  relativeDay: number
  isSelected: boolean
}>`
  cursor: pointer;
  position: absolute;
  height: 100%;
  width: 2.2rem;
  z-index: 3;
  top: 0;
  left: ${({ relativeDay }) => relativeDay}%;
  transform: translate(-50%, 0);
  &:hover ${RocketSvg} {
    translate: 0 -40%;
    img:not(:first-child) {
      opacity: 1;
    }
  }
  ${({ isSelected }) =>
    isSelected &&
    `
    ${RocketSvg} {
      translate: 0 -40%;
      img:not(:first-child) {
        opacity: 1;
      }
    }
  `}

  overflow: hidden;
`

export default SmallTimeline
