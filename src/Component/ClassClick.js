import React, { Component } from 'react'

 class ClassClick extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Count:0
      }
     this.EventHandler=this.EventHandler.bind(this)
    }
    
    EventHandler()
    {
       this.setState({
        Count:this.state.Count+1
       })
    }
  render() {
    return (
      <div>
        <h1>Count : {this.state.Count}</h1>
        <button onClick={this.EventHandler}>Click</button>
      </div>
    )
  }
}

export default ClassClick
