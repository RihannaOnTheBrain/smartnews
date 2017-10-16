// 类似于Bootstrap
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
// logo acts like a variable
import logo from '../logo.png';
import './App.css';

import NewsPanel from '../NewsPanel/NewsPanel';

class App extends React.Component {
  render() {
    return (
      <div>
        <img className='logo' src={logo} alt='logo'/>
        <div className='container'>
          <NewsPanel />
        </div>
      </div>
    );
  }
}

export default App;
