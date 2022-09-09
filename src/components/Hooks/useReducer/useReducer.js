import React , {useState , useReducer} from 'react'
import Button from './Button'


const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const reducer = (state ,action) => {
    switch(action.type){
        case INCREMENT:
            return state+action.payload
        case  DECREMENT:
            return state-action.payload
        default:
            return state    
    }
}


const  UseReducer = () => {
    // const [count , setCount] = useState(0)

    const [count , dispatch] = useReducer(reducer , 0)


  return (
      <div>
        <Button label ="increment" onClick={() => dispatch({type:INCREMENT , payload:3})}  />
        <h1> {count}</h1>
        <Button label ="decrement" onClick={() => dispatch({type:DECREMENT, payload:10})}  />

      </div>

  )
}

export default UseReducer