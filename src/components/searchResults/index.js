import React from 'react'
import { SearchResultsWrapper } from './style'


const SearchResults = props => {
  const { isSpeaking, query } = props;

  return (
    <SearchResultsWrapper {...props}>
      {isSpeaking ? (
        <div>Estou te ouvindo...</div>
      ) : (
        <div>Resultados da busca por: {query}</div>
      )}
    </SearchResultsWrapper>
  )
}

export default SearchResults;