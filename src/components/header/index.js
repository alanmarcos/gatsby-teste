import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "../../images/logo-credpago.svg"
import { Header, Menu, LogoWrapper } from './style'
import SearchResults from '../searchResults/index'
const isBrowser = typeof window !== `undefined`
let SpeechRecognition, recognition;

if(isBrowser){
  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  recognition = new SpeechRecognition()
  recognition.lang = 'pt-BR'
}

const menu = {
  'Home': { link: '/' },
  'Sobre a CredPago': { link: '/' },
  'Contato': { link: '/' },
}


const HeaderWrapper = (props) => {
  const { hasSpeechRecognition } = props;
  const [ lastSentence, updateLastSentence ] = useState('')
  const [ isSpeaking, setSpeaking ] = useState(false);


  const gravarAudio = (e) => {

    setSpeaking(true);

    recognition.start()

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      updateLastSentence(finalTranscript || interimTranscript);
      console.log(finalTranscript || interimTranscript)
      setSpeaking(false);
      recognition.stop()
    }

    recognition.onerror = event => {
      alert(event.error);
    }
    
    return false;
  }

  return (
    <Header>

      <SearchResults query={lastSentence} />

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
              <li key={index}>
                <Link to={link}>
                  {item}
                </Link>
              </li>
            )
          })}
          {hasSpeechRecognition && (
            <li>
              <button onClick={gravarAudio} alt={isSpeaking ? 'Ouvindo...' : 'Buscar por voz'}>
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
          <li>
            <button onClick={() => console.log('buscar')}>
              <svg fill="url(#gradientIcons)" viewBox="0 0 90.1 90.1">
                <linearGradient id="gradientIcons" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0dc2ee"/>
                  <stop offset="100%" stopColor="#11639e"/>
                </linearGradient>
                <path d="M72.8 62C85 43.7 80.2 19 62 6.8S19-.6 6.8 17.6-.6 60.5 17.6 72.8c13.4 9 30.9 9 44.4 0l15 15c3 3 7.8 3 10.8 0s3-7.8 0-10.8l-15-15zm-33 8.4c-16.9 0-30.5-13.7-30.5-30.5C9.3 23 23 9.4 39.8 9.4c16.9 0 30.5 13.7 30.5 30.5S56.7 70.3 39.8 70.4z" />
              </svg>
            </button>
          </li>
        </ul>
      </Menu>
      
    </Header>
  )
}

HeaderWrapper.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderWrapper.defaultProps = {
  siteTitle: ``,
}

export default HeaderWrapper
