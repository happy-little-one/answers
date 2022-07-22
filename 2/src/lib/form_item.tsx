/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactNode } from 'react'
import Space from './space'

interface Props {
  title: string
  width?: number
  children: ReactNode
}

export default function FormItem({ title, width, children }: Props) {
  return (
    <div style={{ width: width || 'auto' }}>
      <Space.Y size={2}>
        <div css={css({ fontStyle: 'italic' })}>{title}</div>
        {children}
      </Space.Y>
    </div>
  )
}
