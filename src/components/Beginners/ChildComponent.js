import React from 'react'

function ChildComponent(props) {
  return (
    <div>
    {/* if we need to pass params from child to parent  */}
    <button onClick={() => props.greetHandler('child')}>click me</button>
        <button onClick={props.greetHandler}>click me</button>
    </div>
  )
}

export default ChildComponent