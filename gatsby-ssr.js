import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="typetura"
      src="/js/typetura.min.js"
    />
  ])
}