import styled from '@emotion/styled'

import { widths, colors } from '../../styles/variables'

export const StyledFooter = styled.footer`
  bottom: 0;
  position: relative;
  width: 100%;
  padding: 24px 0;

  margin-top: 10vh;
  .footer__wrapper {
    max-width: ${widths.lg}px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.5rem;
    .footer__logo {
      max-width: 68px;
      max-height: 38px;
      height: 100%;
      width: 100%;
    }
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin: 0 0 0 24px;
        a {
          color: ${colors.grey.base};
          height: 100%;
          &:hover {
            color: ${colors.brand.primary};
          }
          svg {
            max-width: 14px;
            max-height: 14px;
            min-width: 10px;
            min-height: 10px;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`
