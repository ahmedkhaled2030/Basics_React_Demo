import React, { Component } from 'react'
import ChildMemo from  './ChildMemo'
export class ParentMemo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'ahmed'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:"ahmed"
            })
        } , 2000)
    }
  render() {
      console.log('parent comp render')
    return (
        <div>
            <ChildMemo  name={this.state.name} />
        </div>
  
    )
  }
}

export default ParentMemo