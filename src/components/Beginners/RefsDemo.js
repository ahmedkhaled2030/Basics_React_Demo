import React, { Component } from 'react'

 class RefsDemo extends Component {
// two way of refs 
// 1- React.createRef() 3 steps
// 2- cbRef =>callback ref 4 steps
    constructor(props) {
      super(props)
        
      this.inputRef = React.createRef()
      this.cbRef  = null
      this.setCbRef = element => {
          // Dom element which is input
          this.cbRef = element
      }
    }

    componentDidMount(){
        this.inputRef.current.focus()

        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
      alert(this.inputRef.current.value)  
    }

  render() {
    return (
      <div>
          <input type='text' ref={this.inputRef} />
          {/* <input type='text' ref={this.setCbRef} /> */}
          <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}



export default RefsDemo