import React, { ReactNode } from 'react'

import { Container } from '../container'
import { Content } from '../content'
import { StyledFooter } from './style'
import { SpringFadeUp } from '../../utils/animations'

interface ISocial {
  icon: ReactNode
  to: string
}

interface IFooterProps {
  logo: ReactNode
  social: ISocial[]
}

export const Footer = ({ logo, social }: IFooterProps) => (
  <StyledFooter>
    <SpringFadeUp>
      <Container>
        <div className='footer__wrapper'>
          <a
            className='footer__logo'
            href='https://lukesecomb.digital'
            target='_blank'
            rel='noopener noreferrer'
          >
            {logo}
          </a>
          {/* <address>
            Loerracherstrasse 50<br></br>
            4125 Riehen<br></br>
            Switzerland <br></br>
          </address>
          <span>
            Tel +41 61 641 4873<br></br>
            Fax +41 61 641 4875<br></br>
            contact@microwavesolutions.ch
          </span> */}
          <ul>
            {social.map((item) => (
              <li key={item.to}>
                <a href={item.to} target='_blank' rel='noopener noreferrer'>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </SpringFadeUp>
  </StyledFooter>
)
