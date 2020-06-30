import React, { useState, useEffect } from 'react'
import { SearchResultsWrapper, SearchResultsBackDrop, SearchContainer, ResultsContainer } from './style'
const isBrowser = typeof window !== `undefined`
let SpeechRecognition, recognition;

if(isBrowser){
  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  recognition = new SpeechRecognition()
  recognition.lang = 'pt-BR'
}

const SearchResults = props => {
  const { isSpeaking, isActive, onStopSpeaking, onClickOutside } = props;
  const [ lastSentence, updateLastSentence ] = useState('')
  const [ textSearch, updateTextSearch ] = useState('')

  useEffect(() => {
    console.log('isspeaking changed to:', isSpeaking)
    if( isSpeaking ){
      gravarAudio()
    }
  }, [ isSpeaking ])

  useEffect(() => {
    console.log('IsActve changed to:', isActive)
  }, [ isActive ])

  const gravarAudio = (e) => {

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
      //setSpeaking(false);
      handleStopRecordingOrEnter();
      recognition.stop()
    }

    recognition.onerror = event => {
      alert(event.error);
    }
    
    return false;
  }

  const handleStopRecordingOrEnter = () => {
    console.log('handleStopRecordingOrEnter')
    if(onStopSpeaking){
      onStopSpeaking()
    }
    // if(onClickOutside){
    //   onClickOutside()
    // }
    //setSearching(false)
  }

  return (
    <>
      <SearchResultsWrapper {...props}>
        <SearchResultsBackDrop 
          onClick={() => {
            console.log('onClickbackdrop')
            onClickOutside();
          }}
          />
        {isActive && (
          <SearchContainer>
            <div>
              <input 
                type="text" 
                autoFocus={true} 
                onChange={e => updateLastSentence(e.target.value)}
                placeholder={ 
                  isSpeaking ? 'Te ouvindo...' : (lastSentence  || textSearch || 'Buscar por...')
                }
                />
            </div>
          </SearchContainer>
        )}
      
        {isActive && (
          <ResultsContainer>
            {lastSentence}
          </ResultsContainer>
        )}
      </SearchResultsWrapper>
    </>
  )
}

export default SearchResults;