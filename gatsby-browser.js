import React from 'react'
import { IndexLayout } from './src/layouts/index'
import { Header } from './src/components/header'
import { Footer } from './src/components/footer'

import Logo from './src/assets/svg/happi-logo.svg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export const wrapPageElement = ({ element, props }) => (
  <IndexLayout {...props}>
    <Header />
    {element}
    {/* elements that only need to render once can be placed here */}
    <Footer
      logo={<Logo />}
      social={[
        {
          icon: <FontAwesomeIcon icon={['fab', 'twitter']} />,
          to: '',
        },
        {
          icon: <FontAwesomeIcon icon={['fab', 'facebook']} />,
          to: '',
        },
        {
          icon: <FontAwesomeIcon icon={['fab', 'instagram']} />,
          to: '',
        },
        {
          icon: <FontAwesomeIcon icon={['fab', 'linkedin']} />,
          to: '',
        },
      ]}
    />
  </IndexLayout>
)
