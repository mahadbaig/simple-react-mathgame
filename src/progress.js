import React from 'react'

export const Progress = (props) => {
  const score = props.score
  return (
    <div className="progress">
    <div className="boxes">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
    <div className="progress-inner" style={{transform: `scaleX(${score/10})`}}></div>
  </div>
  )
}
