import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'semantic-ui-react'

import "./wall.scss"
import WallCard from './WallCard.jsx';
import KeyWords from './keyWord';

import logo from '../../assets/images/wallCards/thot-logo.png'

const {rebecca, eric, david, john, julie, aurelie} = require('../../utils/fake')
const users = [rebecca, eric, david, john, julie, aurelie]

export class Wall extends Component {
  state ={
    users,
    display: 'none',
  }

  componentDidMount = () => {
    document.getElementById("inputWall").readOnly = true; 
  }
  
  
  filterelement(category){
    console.log(category)
    let filteredUser = users;
    filteredUser = filteredUser.filter((user) => {
      return user.category.includes(category)
    })
    this.setState({
      users: filteredUser
    })
  }

  displayAndRemoveIcons(e){
    if( this.state.display == 'none')
    {
      this.setState({
        display: 'block'
      })
    } else {
      this.setState({
        display: 'none'
      })
    }
  } 
  
  render() {
    console.log(this.state);
    return (
      <div className="wallContainer">
        <div className="wallSearchContainer">
        <img onClick={() => this.filterelement("all")}src={logo} alt="logo" />
          <Input
          id="inputWall"
          readonly="true"
          className="wallSearchInput" 
          iconPosition='left' 
          icon='search' 
          placeholder='Search a skill or profile ...'
          onClick={(e)=> this.displayAndRemoveIcons(e)}
          />
        </div>
        <div className="KeyWords" style={{display: this.state.display}}>
        <KeyWords 
          filteredFunction={(category) => this.filterelement(category)}          
        />
        </div>
        <div className="wallCardsContainer">
          {
            this.state.users.map((user) => {
              return <WallCard key={user.firstname}{...user} />
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall)
