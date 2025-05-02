import React from 'react'

const ButtonSimple = ({value='Click'}) => {
  return (
    <button onClick={onClick}>{value}</button>
  )
}

export default ButtonSimple