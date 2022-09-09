import React from 'react'

 function Button({label , onClick}) {
  return (
   <button className="btn btn-primary mt-3" onClick={() => onClick() } >{label}</button>
  )
}

export default Button