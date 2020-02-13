import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export const Container: FunctionComponent = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

const StyledContainer = styled.section`
  width: 100%;
  background-color: white;
`
