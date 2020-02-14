import React, { FunctionComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

export const Seperator: FunctionComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "content-example.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledSeperator
        style={{
          background: `url(${data.file.childImageSharp.fluid.src}) no-repeat center`,
        }}
      >
        {children}
      </StyledSeperator>
    )}
  />
)

const StyledSeperator = styled.section`
  width: 100%;
  height: 50vh;
`
