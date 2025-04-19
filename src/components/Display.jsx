/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Display.css';

export default props => {

  return (
    <div className="Display">
      <span>{props.value}</span>
    </div>
  )
}
