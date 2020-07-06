import styled from 'styled-components'
import globals from '../globals'
import { lighten, darken } from 'polished'
const { inputSizes } = globals

const bgTypes = {
  'primary': globals.colors.lightBlue,
  'white': 'white'
}

const paddingTypes = {
  small: '0 .5em',
  medium: '0 1em',
  large: '0 2em'
}

const colorTypes ={
  'primary': 'white',
  'white': globals.colors.darkBlue
}

export const Button = styled.button`
  background: ${props => bgTypes[props.buttonType] || globals.colors.lightBlue};
  padding: ${props => paddingTypes[props.size]};
  font-weight: bold;
  height: ${props => inputSizes[props.size]};
  border:none;
  border-radius:4px;
  text-transform: ${props => props.upperCase ? 'uppercase' : 'initial'};
  cursor:pointer;
  color: ${props => colorTypes[props.buttonType] || 'white'};

  &:hover {
    background: ${props => lighten(0.1, bgTypes[props.buttonType])}
  }

  &:active {
    outline:none;
    background: ${props => darken(0.1, bgTypes[props.buttonType])}
  }

  &:focus {
    outline:none;
    box-shadow: ${props => `inset 0 0 0 2px ${darken(0.2, bgTypes[props.buttonType])}`};
  }
`