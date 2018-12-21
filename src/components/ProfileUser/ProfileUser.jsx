import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './profileUser.scss';

const {rebecca, eric, david, john, julie, aurelie} = require('../../utils/fake')
const users = [rebecca, eric, david,  john, julie, aurelie]

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            follow: "Suivre",
            followClass: " ",
            theTheUser: []
        }
    }

    componentDidMount = () => {
    let theUser = this.props.match.params.name
    users.map( user => {
        if (user.firstname === theUser) {
            this.setState({theTheUser: user})
        }
    })
    }
    

    followClick = () => {
        if(this.state.follow === "Suivre") {
            this.setState({follow: "Suivi", followClass: "active"})
        } else {
            this.setState({follow: "Suivre", followClass: " "})
        }
    }

    render() {
        let {theTheUser} = this.state
        return (
        <div className="profile-container">
            <div className="profile-header" style={{backgroundImage: `url('${require(`../../assets/images/wallCards/avatars/${this.props.match.params.name}.jpg`)}')`}}>
                <NavLink to='/wall'><i className="fas fa-arrow-left"></i></NavLink>
            </div>
            <div className="profile-info">
                <div className="profile-content">
                    <h4>{theTheUser.firstname} {theTheUser.lastname}</h4>
                    <p>{theTheUser.city}</p>
                </div>
                <button onClick={() => this.followClick()} className={`profile-follow ${this.state.followClass}`}>{this.state.follow}</button>
            </div>
            <div className="profile-description">
                <p>{theTheUser.description}
                </p>
            </div>
            <div className="profile-skills-container">
                <div className="profile-skills">
                {theTheUser.skills && theTheUser.skills.map( skill => {
                    return <p key={skill}>{skill}</p>
                })}
                </div>
            </div>
            <div className="profile-contact">
                <NavLink to={`/chatbox/${this.props.match.params.name}`}>
                    <i className="fas fa-comment"></i>
                    <p>Contacter</p>
                </NavLink>
            </div>
        </div>
        )
    }
}
