import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import normalize from '../../styles/normalize'
import { Devtools } from '../dev-tools'
import background from '../../assets/images/header-background.jpg'

import './style'

const isDev = process.env.NODE_ENV === 'development'

export const AppLayout: FunctionComponent = ({ data, children }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "header-background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledLayoutRoot
        style={{
          background: `url(${data.file.childImageSharp.fluid.src}) no-repeat center`,
        }}
      >
        <Global styles={() => css(normalize)} />
        <div>{children}</div>
        {isDev && <Devtools />}
      </StyledLayoutRoot>
    )}
  />
)

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background-size: cover;
`
