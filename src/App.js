import React from 'react';
import './App.css';
import List from './components/List/List';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
  return (
    <div className="App">
      <Route path="/profile/:userId"render={()=><ProfileContainer/>} />
      <Route exact path={"/"}render={()=><List/>} />
    </div>
  );
}

export default App;
