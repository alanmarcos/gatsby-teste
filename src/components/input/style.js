import styled from 'styled-components'
import globals from '../globals'
const { colors, inputSizes } = globals
const { lightBlue, darkBlue } = colors

const paddingTypes = {
  small: '0 .2em',
  medium: '0 .4em',
  large: '0 1em'
}

export const Input = styled.input`
  background: ${props => props.ghost ? 'transparent' : lightBlue};
  border: none;
  outline: none;
  box-shadow: ${props => `inset 0 0 0 1px ${lightBlue}`};
  color: ${props => props.ghost ? 'white' : lightBlue};
  height: ${props => inputSizes[props.size]};
  line-height: ${props => inputSizes[props.size]};
  border-radius:4px;
  padding: ${props => paddingTypes[props.size]};
  transition: all .2s;

  &:focus {
    box-shadow: inset 0 0 0 1px white;
  }
`