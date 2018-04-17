import React, { Component } from 'react';

import './App.css';
import scenes from './scenes.json'
import Terminator from './Terminator.mp3'


class App extends Component {
  constructor() {
    super();
    this.state = {
      scene_num: 0,
    

      
    }
    this.audio = new Audio(Terminator);
  }
  componentDidMount = () => {
    this.audio.play();
  }

  nextScene = (s) =>  {
    
    ////update state
    this.setState({scene_num : s});
     //////
  }
  render() {
    return (
      <div className="App">
      
      
       
      <p> {scenes[this.state.scene_num].text} </p>
      <img src={scenes[this.state.scene_num].image}/>

   
      {scenes[this.state.scene_num].options.map((op, i) => 
      <div key ={i}> < br /> <button onClick={() => this.nextScene(op.send_to)}>{op.text}</button> < br /></div>
      )}

        
      {/* if you have images, put them in an images folder in the public folder */}
      </div>
    );
  }
}

export default App;
