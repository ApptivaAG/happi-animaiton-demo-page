import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Banner } from '../components/banner'
import { Container } from '../components/container'
import { Content } from '../components/content'
import { Columns } from '../components/columns'
import { Canberra } from '../components/canberra'
import {
  SpringFadeUp,
  SpringFadeRight,
  SpringFadeLeft,
} from '../utils/animations'
import { Seperator } from '../components/seperator'
import Img from 'gatsby-image'

export default ({ data }) => {
  return (
    <>
      <Canberra title='Happi' />
      <Banner>
        <h1 style={{ textAlign: 'center', color: 'white' }}>
          Happiness is closer than you think
        </h1>
      </Banner>

      <StaticQuery
        query={graphql`
          query {
            yoga: file(relativePath: { eq: "yoga.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            positive: file(relativePath: { eq: "positive.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data) => (
          <Container>
            <Columns>
              <Content>
                <SpringFadeUp>
                  <h2>Heading 2</h2>
                  <p>
                    Suffering and well-being are both part of the human
                    condition and psychology should care about each. Human
                    strengths, excellence, and flourishing are just as authentic
                    as human distress. People want to cultivate the best version
                    of themselves and live a meaningful life. They want to grow
                    their capacities for love and compassion, creativity and
                    curiosity, work and resilience, and integrity and wisdom.
                  </p>
                </SpringFadeUp>
                <SpringFadeUp>
                  <p>
                    We need people who are willing to make well-being/happiness
                    their business model, people willing to experiment, and
                    secure to fail.
                  </p>
                </SpringFadeUp>
                <SpringFadeUp>
                  <p>
                    We need company leaders who are willing to dive in
                    unchartered roads, who are open to discuss a more meaningful
                    business paradigm that includes well-being.
                  </p>
                  <p>So, how best to tap into our expertise?</p>
                </SpringFadeUp>
              </Content>
            </Columns>

            <Seperator>
              <Content>
                <SpringFadeRight>
                  <h1
                    style={{
                      textAlign: 'center',
                      paddingTop: 100,
                      color: 'white',
                    }}
                  >
                    Mindfulness, Stress reduction, Creativity and Innovation 
                  </h1>
                </SpringFadeRight>
              </Content>
            </Seperator>

            <Columns cols={2} isResponsive>
              <Content>
                <SpringFadeLeft>
                  <div style={{ padding: '0 20px' }}>
                    <Img
                      fluid={data.yoga.childImageSharp.fluid}
                      alt='Positive'
                    />
                  </div>
                </SpringFadeLeft>
              </Content>
              <Content>
                <SpringFadeRight>
                  <h2>
                    Mindfulness, Stress reduction, Creativity and Innovation 
                  </h2>
                </SpringFadeRight>
                <SpringFadeUp>
                  <p>
                    The most powerful way to ensure high performance is by
                    recognizing what’s going on inside of your people. When
                    employees feel their best — physically, emotionally,
                    mentally and spiritually — they focus more deeply, think
                    more creatively, lead more effectively, and make better
                    decisions.
                  </p>
                </SpringFadeUp>
              </Content>
            </Columns>
            <Columns cols={2} isResponsive>
              <Content>
                <SpringFadeUp>
                  <h2>Positives Emotions</h2>
                </SpringFadeUp>
                <SpringFadeUp>
                  <p>
                    How to create a space both from a physical and time
                    perspective, that enables self-reflection, the sharing of
                    experiences and knowledge, a sense of belonging and
                    connectedness to individuals, the team, and the
                    organisation. Allowing for a greater frequency of positive
                    emotions would help facilitate a change in mind-set, as well
                    as fostering greater levels of trust, collaboration and
                    oneness. 
                  </p>
                </SpringFadeUp>
              </Content>
              <Content>
                <SpringFadeRight>
                  <div style={{ padding: '0 20px' }}>
                    <Img
                      fluid={data.positive.childImageSharp.fluid}
                      alt='Positive'
                    />
                  </div>
                </SpringFadeRight>
              </Content>
            </Columns>

            <Columns>
              <Content>
                <SpringFadeUp>
                  <h2>
                    Build and Sustain Comprehensive and well though of wellbeing
                    initiatives in the workplace  
                  </h2>
                </SpringFadeUp>
                <SpringFadeUp>
                  <p>
                    Wellbeing isn’t just about being happy, wealthy or
                    successful. A well-rounded and holistic approach to
                    wellbeing in the workplace will address as many dimensions
                    as possible. Holistic wellbeing allows you to get creative
                    with the type of services and benefits you provide,
                    depending on the needs of your workforce. Tap into our
                    expertise to build a sustainable program.
                  </p>
                </SpringFadeUp>
              </Content>
            </Columns>
          </Container>
        )}
      />
    </>
  )
}
