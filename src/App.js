import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css'
export default class App extends Component {

state={

display:true

}





  render() {
    return (
      <div className="App">
        <button onClick={()=> this.setState({display:!this.state.display})} >
          {this.state.display ? "hide counter" : "show counter" }</button>

       { this.state.display ? (
        <Counter title="This is a counter"/>) : ""

  }
      </div>
    )
  }
}

