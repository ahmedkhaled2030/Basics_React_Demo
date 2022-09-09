import React, { Component } from 'react'
import  ChildComponent from './Beginners/ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        parentName : 'Parent'
       }
       this.greetHandler = this.greetHandler.bind(this)
     }

     greetHandler (childName) {
         alert(`hello ${this.state.parentName} from  ${childName}`)
     }

  render() {
    return (
      <div>
          <ChildComponent greetHandler={this.greetHandler} />
      </div>
    )
  }
}

export default ParentComponent