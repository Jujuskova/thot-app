import React, { Component } from 'react'
import {truncateString} from '../../utils/stringHelpers';
import { NavLink } from 'react-router-dom';

export default class WallCard extends Component {
  render() {

    const {avatar, firstname, lastname, timeAgo, message, like, city} = this.props
    return (
      <div className="wallCard" style={{background: `url('${require(`../../assets/images/wallCards/background/${firstname}.jpeg`)}')`}}>
        <div className="wallCardHeader">
        <NavLink to={`/user/${firstname}`}>
          <img className="leftPushed wallCardAvatar" src={require(`../../assets/images/wallCards/avatars/${firstname}.jpg`)}/>
          </NavLink>
          <div className="wallCardHeaderTextBox">
            <NavLink to={`/user/${firstname}`} className="wallCardHeaderTextBoxLeft">
              <p className="leftPushed white-text-bold">{firstname}</p>
              <p className="white-text-bold">{timeAgo}h ago</p>
            </NavLink>
            <div className="wallCardHeaderTextBoxRight">
              <span><i className="fas fa-map-marker-alt white-text-bold"><span className="logoValue">{city}</span></i></span>
            </div>
          </div>
        </div>
        <div className="wallCardBottomContent">
          <div className="wallCardBody">
            <p dangerouslySetInnerHTML={{__html:message}} className="white-text"></p>
          </div>
        </div>
        <div className="wallCardFooter">
          <span><i className="fas fa-heart white-text-bold"><span className="logoValue">{like}</span></i></span>
        </div>
      </div>
    )
  }
}