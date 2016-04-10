
import React from 'react';

import { headerStyle } from '../styles';

const App = React.createClass({
  render() {
    return (
      <div>
        <div style={headerStyle}> This is the Header from App.js! </div>
        <br />
        {this.props.children}
      </div>
    );
  }
});

export default App;
