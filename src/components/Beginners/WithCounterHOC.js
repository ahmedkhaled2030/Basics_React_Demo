import React from 'react'
// HOC HIGHER ORDER COMPONENT
const withCounter  = (WrappedComponent , incrementNumber ) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count : 0
            }
          }
      
          incrementCount = () => {
              this.setState(prevState =>  {
                  return {count : prevState.count + incrementNumber}
              })
          }
        render(){
            return <WrappedComponent 
            count={this.state.count}
            incrementCount ={this.incrementCount}
             />
        }
    }
    return NewComponent
}  
export default withCounter