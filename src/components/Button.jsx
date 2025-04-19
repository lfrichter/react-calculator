/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Button.css'

export default props => {
  // let classes = 'Button '
  // classes += props.operation ? 'operation' : ''
  // classes += props.double ? 'double' : ''
  // classes += props.triple ? 'triple' : ''

  return (
    <button
      // className={classes}
      className={`
        Button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
      `}
      onClick={e => props.click && props.click(props.label)}
    >
      {props.label}
    </button>
  )
}

