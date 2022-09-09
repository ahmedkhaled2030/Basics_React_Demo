import React, { Component } from 'react'

 class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'hello'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
      //approach : binding in the class constructor => the best
    } 


    // clickHandler() {
    //      //approach : binding in the class constructor => the best
    //     this.setState ({
    //         message : 'GoodBye !'
    //     })
    //     console.log(this)
    // }


    clickHandler = () => {
         //approach : class property as arrow function
         this.setState({
             message : 'GoodBye !'
         })
    }
   

  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            <button onClick={this.clickHandler}>click</button>
        </div>

    )
  }
}

export default EventBinding