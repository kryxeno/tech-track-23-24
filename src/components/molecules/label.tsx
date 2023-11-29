import styled from "styled-components"

const Label = ({ text }: { text: React.ReactNode }) => {
  return (
    <LabelWrapper>
      <p>{text}</p>
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
  }
`

export default Label
