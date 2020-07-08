import styled from 'styled-components'
import globals from '../globals'
import { lighten, darken } from 'polished'
const { inputSizes } = globals

const bgTypes = {
  primary: globals.colors.lightBlue,
  secondary: 'white'
}

const paddingTypes = {
  small: '0 .5em',
  medium: '0 1em',
  large: '0 2em'
}

const colorTypes ={
  primary: 'white',
  secondary: globals.colors.lightBlue
}

const boxShadow = props => {
  const isSecondary = props.buttonType === 'secondary'
  return isSecondary ? '-2px 2px 6px 0 rgba(0,0,0,0.2)' : 'none'
}

const hover = props => {
  const isSecondary = props.buttonType === 'secondary'
  return isSecondary ? 'rgba(255,255,255,0.9)' : lighten(0.1, bgTypes[props.buttonType])
}

export const Button = styled.button`
  background: ${props => bgTypes[props.buttonType] || globals.colors.lightBlue };
  padding: ${props => paddingTypes[props.size]};
  font-weight: bold;
  height: ${props => inputSizes[props.size]};
  border:none;
  border-radius:4px;
  text-transform: ${props => props.upperCase ? 'uppercase' : 'initial'};
  cursor:pointer;
  color: ${props => colorTypes[props.buttonType] || 'white'};
  box-shadow: ${props => boxShadow(props)};

  &:hover {
    background: ${props => hover(props)}
  }

  &:active {
    outline:none;
    background: ${props => darken(0.1, bgTypes[props.buttonType])}
  }

  &:focus {
    outline:none;
    box-shadow: ${props => `inset 0 0 0 2px ${darken(0.2, bgTypes[props.buttonType])}`};
  }

  & > p {
    margin:0;
    padding:0;
  }
`