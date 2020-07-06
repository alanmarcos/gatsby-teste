import React from 'react'
import { Button } from './style'

const ButtonCustom = props => {
  const { htmlType, type, ...everyThingElse } = props;

  return (
    <Button 
      {...everyThingElse}
      buttonType={type}
      type={htmlType}>

    </Button>
  )
}

export default ButtonCustom