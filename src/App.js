import React, { Component } from 'react';
import PokeApi from "./PokeApi/PokeApi.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
      	<PokeApi />
      </div>
    );
  }
}

export default App;
