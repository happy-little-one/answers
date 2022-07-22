/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { css } from '@emotion/react'

interface InputProps {
  value: string
  onChange?(value: string): void
  prefix?: ReactNode
}

interface TextProps {
  value?: string
  placeholder?: string
  onChange?(value: string): void
  rows?: number
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: solid 1px var(--border);
  transition: border-color 0.5s;
  & > * {
    flex-shrink: 0;
  }
  &:focus-within {
    border-color: var(--text);
  }
`

function Input({ value, onChange, prefix }: InputProps) {
  return (
    <Container>
      {prefix}
      <input
        css={css`
          flex-grow: 1;
          font-size: inherit;
          font-family: inherit;
          border: none;
          outline: none;
          color: inherit;
          background: transparent;
        `}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
      />
    </Container>
  )
}

Input.Text = ({ value, onChange, placeholder, rows = 3 }: TextProps) => {
  return (
    <Container>
      <textarea
        css={css`
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          color: inherit;
          border: none;
          outline: none;
          background: transparent;
          resize: none;
          &::placeholder {
            color: rgb(255 255 255 / 45%);
          }
        `}
        value={value}
        placeholder={placeholder}
        rows={rows}
      />
    </Container>
  )
}

export default Input
