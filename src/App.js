import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar' 


export default class App extends Component {
  state={
    progress:50
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='white'
        height={4}
        progress={this.state.progress}

      />
        <Switch>
          <Route exact path="/"> <News setProgress={this.setProgress}  key='general'  pageSize={15} country='in' category='general'/> </Route>
          <Route exact path="/home"> <News setProgress={this.setProgress}  key='home'pageSize={15} country='in' category='home'/> </Route>
          <Route exact path="/business"> <News setProgress={this.setProgress}  key='business' pageSize={15} country='in' category='business'/> </Route>
          <Route exact path="/technology"> <News setProgress={this.setProgress}  key='technlogy' pageSize={15} country='in' category='technology'/> </Route>
          <Route exact path="/sport"> <News setProgress={this.setProgress}  key='sport' pageSize={15} country='in' category='sport'/> </Route>
          <Route exact path="/general"> <News setProgress={this.setProgress}  key='general' pageSize={15} country='in' category='general'/> </Route>
          <Route exact path="/health"> <News setProgress={this.setProgress}  key='health' pageSize={15} country='in' category='health'/> </Route>
          <Route exact path="/entertainment"> <News setProgress={this.setProgress}  key='entertainment' pageSize={15} country='in' category='entertainment'/> </Route>
          <Route exact path="/science"> <News setProgress={this.setProgress}  key='science' pageSize={15} country='in' category='science'/> </Route>
        </Switch>
        </Router>         
        </div>
       
    )   
  }
}
