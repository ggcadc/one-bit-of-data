import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.getData = this.getData.bind(this)
// temporary stand in state data
    this.state = {
      data: '....',
    }
  }
  
// uses axios to make a simple fetch 
 getData() {
  axios.get('URL_OF_YOUR_DEPLOYED_NODE_API').then(function(data, err){
    if(err)console.log(err);
    return data
   }).then(data => {

 // sets the state to the data value
    this.setState({
      subs: data.data[0] 
    })
   })
 }

  render() {
    return (
      <div className="App">
        <h1>
          <span className='glow'>{this.state.data}</span> DATA!!
        </h1>
      </div>
    );
  }
  // runs when component is mounted
  componentDidMount(){

  // this will fetch fresh data every 60 mins
    setInterval(function(){
      this.getData();
      console.log('re-fetching data')
    }.bind(this), 3.6e+6)

  // this makes the initial fetch when the component mounts
    this.getData();
  }
}

export default App;
