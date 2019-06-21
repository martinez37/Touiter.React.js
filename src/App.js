import React from 'react';
import './App.css';
import Header from '../src/components/Header.js';
import SendMessageForm from '../src/components/SendMessageForm.js';
import TouitContainer from '../src/components/TouitContainer.js';
import Trending from '../src/components/Trending.js';

class App extends React.Component {
  render() {
    return (
      <div>
      <Header/>
      <SendMessageForm/>
      <TouitContainer/>
      <Trending/>
      </div>
    );
  }
}



export default App;
