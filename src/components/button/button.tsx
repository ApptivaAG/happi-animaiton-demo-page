import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from '../link'

interface IButtonProps {
  to?: string
  disabled?: boolean
  children: ReactNode
  className?: string
  [key: string]: any
}

export const Button = ({
  to,
  children,
  className,
  disabled,
  ...rest
}: IButtonProps) => {
  const passProps = { ...rest }
  const isLink = typeof to !== 'undefined'
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '')

  if (isExternal) {
    return (
      <a target='_blank' rel='noopener noreferrer' href={to} {...passProps}>
        {children}
      </a>
    )
  }

  if (isLink) {
    return (
      <Link to={to || '#'} {...passProps}>
        {children}
      </Link>
    )
  }

  passProps.disabled = disabled

  return <button {...passProps}>{children}</button>
}
const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: red;
`
