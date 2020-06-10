import React from 'react'
import { SearchResultsWrapper } from './style'


const SearchResults = props => {
  const { isSpeaking, query } = props;

  return (
    <SearchResultsWrapper {...props}>
      {isSpeaking ? (
        <div>Estou te ouvindo... (mas não estou bem integrado)</div>
      ) : (
        <div>Resultados da busca por: {query}</div>
      )}
    </SearchResultsWrapper>
  )
}

export default SearchResults;