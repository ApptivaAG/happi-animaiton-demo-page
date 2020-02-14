import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import background from '../../assets/images/content-example.jpg'

export const Seperator: FunctionComponent = ({ children }) => (
  <StyledSeperator>{children}</StyledSeperator>
)

const StyledSeperator = styled.section`
  width: 100%;
  height: 50vh;
  background: url(${background}) no-repeat center center;
`
