import React, { Component } from 'react'
import {authAction, logOutAction} from '../stores/actions/auth'
import { connect } from 'react-redux';


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
