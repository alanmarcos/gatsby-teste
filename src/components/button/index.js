import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './style'

const ButtonCustom = props => {
  const { htmlType, type, ...everyThingElse } = props;

  return (
    <Button 
      {...everyThingElse}
      buttonType={type}
      className="UIButton"
      type={htmlType}>

    </Button>
  )
}

ButtonCustom.defaultProps = {
  type: 'primary',
  size: 'medium'
}

ButtonCustom.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default ButtonCustom