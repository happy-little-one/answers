import styled from '@emotion/styled'

interface Props {
  size?: number
}

const gap = ({ size = 1 }: Props) => `calc(${size} * var(--space-unit))`

export const X = styled.div`
  display: flex;
  align-items: center;
  gap: ${gap};
  & > * {
    flex-grow: 1;
  }
`

export const Y = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gap};
`

const Space = { X, Y }

export default Space
