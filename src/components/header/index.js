import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "../../images/logo-credpago.svg"
import { Header, Menu, LogoWrapper } from './style'
import SearchResults from '../searchResults/index'
import { ReactComponent as IconeBusca } from '../../images/icons/search.svg'
import { ReactComponent as IconeMenu } from '../../images/icons/menu.svg'
import useEventListener from '@use-it/event-listener';

const menu = {
  'Home': { link: '/' },
  'Sobre a CredPago': { link: '/' },
  'Contato': { link: '/' },
}


const HeaderWrapper = (props) => {
  const { hasSpeechRecognition } = props;
  const [ isSpeaking, setSpeaking ] = useState(false)
  const [ isSearchActive, updateSearchActive ] = useState(false)
  const [ bgHeader, updateBgHeader ] = useState(false)

  useEventListener('scroll', (e) => {
    let currentPosition = window.pageYOffset;
    let headerBgColor = 'rgba(255,255,255,0.96)'

    if( currentPosition > 30 ){
      if(bgHeader !== headerBgColor){
        updateBgHeader(headerBgColor)
      }    
    } else {
      updateBgHeader(false)
    }
  });

  const handleSearch = (isActive, isSpeaking) => {
    updateSearchActive(isActive)
    setSpeaking(isSpeaking)
  }

  return (
    <>
      <Header bgColor={bgHeader}>

        <LogoWrapper>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img width="176" src={Logo} alt="CredPago" />
          </Link>
        </LogoWrapper>

        <Menu>
          <ul>
            {Object.keys(menu).map( (item, index) => {
              let { link } = menu[item];
              return (
                <li className="menu-item" key={index}>
                  <Link to={link}>
                    {item}
                  </Link>
                </li>
              )
            })}
            {hasSpeechRecognition && (
              <li>
                <button onClick={() => handleSearch(true, true)} alt={isSpeaking ? 'Ouvindo...' : 'Buscar por voz'}>
                  <svg fill="url(#gradientIcons)" viewBox="0 0 36.2 52.2">
                    <linearGradient id="gradientIcons" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#0dc2ee"/>
                      <stop offset="100%" stopColor="#11639e"/>
                    </linearGradient>
                    <path d="M18.2 34.2c5.5 0 10-4.5 10-10v-14c0-5.5-4.5-10-10-10s-10 4.5-10 10v14c0 5.5 4.5 10 10 10zm-6-24c0-3.3 2.7-6 6-6s6 2.7 6 6v14c0 3.3-2.7 6-6 6s-6-2.7-6-6v-14z" />
                    <path d="M36.2 24.2c0-1.1-.9-2-2-2s-2 .9-2 2c0 7.7-6.3 14-14 14s-14-6.3-14-14c0-1.1-.9-2-2-2s-2 .9-2 2c0 9.2 7 16.9 16 17.9v6.1h-6c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2h-6V42c9-1 16-8.6 16-17.8z" />
                  </svg>
                </button>
              </li>
            )}
            <li className="mobile-menu-link">
              <button onClick={() => console.log('abrir menu mobile')}>
                <IconeMenu />
              </button>
            </li>
            <li>
              <button onClick={() => handleSearch(true, false)}>
                <IconeBusca />
              </button>
            </li>
          </ul>
        </Menu>
        
      </Header>
      <SearchResults 
        isActive={isSearchActive}
        isSpeaking={isSpeaking}
        onStopSpeaking={() => setSpeaking(false)}
        onClickOutside={() => updateSearchActive(false)}
        />
    </>
  )
}

HeaderWrapper.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderWrapper.defaultProps = {
  siteTitle: ``,
}

export default HeaderWrapper
