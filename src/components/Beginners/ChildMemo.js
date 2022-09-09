import React from 'react'

function ChildMemo({name}) {
    console.log('child memo render')
  return (
    <div>
    {name}
    </div>
  )
}

export default React.memo(ChildMemo) 