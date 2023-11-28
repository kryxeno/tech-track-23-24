import styled from "styled-components"

const Label = ({ text }: { text: React.ReactNode }) => {
  return (
    <LabelWrapper>
      <p>{text}</p>
    </LabelWrapper>
  )
}

const LabelWrapper = styled.div`
  background: var(--color-primary);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-s);
  width: fit-content;
  p {
    color: #fff;
  }
`

export default Label
