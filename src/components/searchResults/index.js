import React from 'react'
import { SearchResultsWrapper } from './style'


const SearchResults = props => {
  const { query } = props;

  return (
    <SearchResultsWrapper {...props}>
      Resultados da busca por: {query}
    </SearchResultsWrapper>
  )
}

export default SearchResults;