import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import Home from '../components/Home/Home';
import ChatboxUser from '../components/ChatboxUser/ChatboxUser';
import { connect } from 'react-redux';
import Wall  from '../components/Wall';
import ProfileUser from '../components/ProfileUser/ProfileUser'
import Congratulation from '../components/Congratulations/Congratulation';

class PublicRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/chatbox/:name" component={ChatboxUser}/>
        <Route exact path="/wall" component={Wall}/>
        <Route exact path="/user/:name" component={ProfileUser}/>
        <Route exact path="/congratulation/:name" component={Congratulation}/>
      </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PublicRouter));