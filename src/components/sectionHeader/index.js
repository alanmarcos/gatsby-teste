import React from 'react'
import { H2 } from '../headings/index'
import { Wrapper } from './style'

export const SectionHeader = props => {
  const { title, desc, icon } = props

  return (
    <Wrapper>
      {icon && (
        <img loading="lazy" width="69" src={icon} alt={title} />
      )}
      <H2>{title}</H2>
      <p>{desc}</p>
    </Wrapper>
  )
}

export default SectionHeader