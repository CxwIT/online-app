// src/App.js
  import React, { Component } from 'react';
  import { Button } from 'antd';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <Button type="primary" onClick="show">点击我</Button>
          <image ></image>
        </div>
      );
    }
  }
  export default App;