import React from 'react';
import Todo from './Todo';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import ReadMore from './ReadMore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/AboutUs' component={AboutUs}/>
          <Route path='/ReadMore' component={ReadMore}/>
         
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Home = () => {

  return (
    <div className="home">
      <h2>Homepage</h2>
      <div className="Todo">
        <div className="Todo_1"> <Todo text='This is the first App!!' /></div>
        <div className="Todo_2">   <Todo text='Buy tow and get one free!!' /></div>
        <div className="Todo_3">  <Todo text='Opps' /></div>
      </div>
    </div>
  );
}

export default App;