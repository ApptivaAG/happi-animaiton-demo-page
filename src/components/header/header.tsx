import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from '../link'
import StarterLogo from '../../assets/svg/happi-logo.svg'
import { HeaderContainer, HeaderMenu } from './style'

export const Header = () => (
  <HeaderContainer>
    <nav className='header__wrapper'>
      <Link to='/'>
        <div className='logo'>
          <StarterLogo />
        </div>
      </Link>

      <HeaderMenu>
        <Link name='workshops' to='/'>
          Workshops
        </Link>
        <Link name='workshops' to='/'>
          Cources
        </Link>
        <Link name='workshops' to='/'>
          Resources
        </Link>
      </HeaderMenu>
    </nav>
  </HeaderContainer>
)
