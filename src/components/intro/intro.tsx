import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { rem } from '../../styles/mixins'
import { colors } from '../../styles/variables'

export const Intro: FunctionComponent = ({ children }) => {
  return <StyledIntro>{children}</StyledIntro>
}

const StyledIntro = styled.div`
  padding-top: 20vh;
`
