import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: 'could be anything...',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // using fetch so we dont have to include other libs like axios
    fetch('http://localhost:3001/api/data')
      .then((data, err) => {
        if (err) console.log(err);
        console.log(data);
        // translate the returned data into JSON so we can work with it
        return data.json();
      })
      .then((data) => {
        console.log(data)
        // sets the state to the data value when the promise from fetch resolves
        this.setState({
          data: data[0].dataName,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>
          <span className="glow">{this.state.data}</span>
        </h1>
      </div>
    );
  }
}

export default App;
