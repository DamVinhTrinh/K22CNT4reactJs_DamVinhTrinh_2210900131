import React, { Component } from 'react';
import DVT_enventform1 from './components/DVT_enventform1';
import DVT_eventform2 from './components/DVT_eventform2';
import DVT_eventform3 from './components/DVT_eventform3';
import DVT_eventform4 from './components/DVT_eventform4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form demo</h1>
        <DVT_enventform1 />
        <DVT_eventform2 />
        <DVT_eventform3 />
        <DVT_eventform4 name="Dam Vinh Trinh" />
      </div>
    );
  }
}

export default App;