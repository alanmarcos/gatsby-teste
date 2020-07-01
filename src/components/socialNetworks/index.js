import React from 'react'
import { SocialNetworkList } from './style'

import { ReactComponent as IconFacebook } from '../../images/icons/facebook.svg'
import { ReactComponent as IconInstagram } from '../../images/icons/instagram.svg'
import { ReactComponent as IconTwitter } from '../../images/icons/twitter.svg'
import { ReactComponent as IconYoutube } from '../../images/icons/youtube.svg'
import { ReactComponent as IconLinkedin } from '../../images/icons/linkedin.svg'

const RedesSociais = props => {

  return (
    <SocialNetworkList>
      <li>
        <a href="//facebook.com/credpago" target="_blank" rel="noreferrer">
          <IconFacebook />
        </a>
      </li>
      <li>
        <a href="//facebook.com/credpago" target="_blank" rel="noreferrer">
          <IconInstagram />
        </a>
      </li>
      <li>
        <a href="//facebook.com/credpago" target="_blank" rel="noreferrer">
          <IconTwitter />
        </a>
      </li>
      <li>
        <a href="//facebook.com/credpago" target="_blank" rel="noreferrer">
          <IconYoutube />
        </a>
      </li>
      <li>
        <a href="//facebook.com/credpago" target="_blank" rel="noreferrer">
          <IconLinkedin />
        </a>
      </li>
    </SocialNetworkList>
  )
}

export default RedesSociais