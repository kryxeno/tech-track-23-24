import { CircleQuestion } from "grommet-icons"
import styled from "styled-components"

const Label = ({
  text,
  question
}: {
  text: React.ReactNode
  question?: boolean
}) => {
  return (
    <LabelWrapper>
      <p>
        {question && <CircleQuestion color="#fff" />}
        {text}
      </p>
    </LabelWrapper>
  )
}

const LabelWrapper = styled.div`
  background: linear-gradient(
    90deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 100%
  );
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-s);
  width: fit-content;
  p {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      scale: 0.9;
    }
  }
`

export default Label
