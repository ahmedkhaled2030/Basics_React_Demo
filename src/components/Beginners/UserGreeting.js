



import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true 
      }
    }
  render() {
      // variable element approach in conditions 
    //   let message ; 
    //   if(this.state.isLoggedIn) {
    //       message  = <div>hello Ahmed</div>
    //   }else{
    //       message = <div>hello Guest</div>
    //   }



    return this.state.isLoggedIn && <div>hello Ahmed</div>
     // short circuit operator approach in conditions and the best cause it will be used in jsx

    //  this.state.isLoggedIn ?
    //  (<div>hello Ahmed</div>) : (<div>hello Guest</div>)
     // ternary operator approach in conditions and the best cause it will be used in jsx


    
  }
}

export default UserGreeting