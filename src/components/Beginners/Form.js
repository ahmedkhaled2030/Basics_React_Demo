import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username : ''
      }
    }

    changeHandler =(event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleSubmit = event => {
        alert (`${this.state.username}`)
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <h2>username</h2>
              <input value={this.state.username} onChange={this.changeHandler} />
          </div>
          <button type='submi'>submit</button>
      </form>
    )
  }
}

export default Form