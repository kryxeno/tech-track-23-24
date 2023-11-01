import Link from "next/link"
import styled from "styled-components"
import Hva from "../svg/hva"
import LinkedIn from "../svg/linkedin"
import Github from "../svg/github"

interface OptionData {
  [key: string]: {
    path: string
    icon: React.ReactNode
  }
}

const optionData: OptionData = {
  github: {
    path: "https://github.com/kryxeno/tech-track-23-24",
    icon: <Github />
  },
  linkedin: {
    path: "https://www.linkedin.com/in/tim-van-ingen-1555bb25a/",
    icon: <LinkedIn />
  },
  hva: {
    path: "https://www.amsterdamuas.com/",
    icon: <Hva />
  }
}

const ButtonMenu = ({ options }: { options: string[] }) => {
  return (
    <Wrapper>
      {options.map((option: string) => {
        const { path, icon } = optionData[option]
        return (
          <ButtonWrapper href={path} key={option}>
            {icon}
          </ButtonWrapper>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ButtonWrapper = styled(Link)`
  width: 2rem;
  height: 2rem;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  svg,
  path {
    transition: fill 0.3s;
  }

  &:hover {
    svg,
    path {
      fill: var(--color-primary) !important;
    }
  }
`

export default ButtonMenu
