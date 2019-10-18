import React, { Component } from 'react';
import './components/style.css';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floor: 0
    }
  }

  handleChange = (event) => {
    this.setState({floor: event.target.value})
  }
  

  // handleChange = (event) => {
  //   let parsedNum = parseInt(event.target.value);
  //   if (!isNaN(parsedNum)) { 
  //     this.setState({floor: parsedNum});
  //     }
  // };
  
  render() {

    const a = this.state.floor

    const elevator = (a) => {
        if (a === '1') {
            return "Floor 1";
        }
        else if (a === '2') {
            return "Floor 2";
        }
        else if (a === '3') {
            return "Floor 3";
        }
        else {
            return "An Invalid Floor"
        }
    }

    const selected = "You Have Selected " + elevator(a)

    return ( 
      <>
      <div className="App">
        <header className="App-header">
          <h1>Elevator</h1>
          <label>Floor:</label>
          <input type="number" placeholder="Floor Number" value={this.state.floor} onChange={this.handleChange}/>
          <p>{selected}</p>
        </header>
      </div>
      </>
    );
  }
}