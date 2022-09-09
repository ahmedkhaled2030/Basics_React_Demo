import React from 'react'

function FunctionClick() {

  const  clickHandler  = () =>  console.log('app')


  return (
    <button onClick={clickHandler} > click</button>
  )
}

export default FunctionClick

