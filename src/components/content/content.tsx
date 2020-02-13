import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { widths } from '../../styles/variables'

export const Content: FunctionComponent = ({ children }) => (
  <StyledContent>{children}</StyledContent>
)

const StyledContent = styled.div`
  max-width: ${widths.lg}px;
  width: 100%;
  min-height: 80px;
  margin: 0 auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
`
