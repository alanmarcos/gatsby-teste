import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "../images/logo-credpago.svg"
const isBrowser = typeof window !== `undefined`
let SpeechRecognition, recognition;

if(isBrowser){
  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  recognition = new SpeechRecognition()
  recognition.lang = 'pt-BR'
}


const Header = (props) => {
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
      updateLastSentence(finalTranscript);
      setSpeaking(false);
      recognition.stop()
    }

    recognition.onerror = event => {
      alert(event.error);
    }
    
    return false;
  }

  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1800,
          padding: `1.45rem 1.0875rem`,
          display: 'grid',
          gridTemplateColumns: '1fr max-content'
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img width="176" src={Logo} alt="CredPago" />
          </Link>
        </h1>
        {hasSpeechRecognition && (
          <button onClick={gravarAudio}>{isSpeaking ? 'fala que eu te escuto meu querido...' : lastSentence || 'Buscar por voz'}</button>
        )}      
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
