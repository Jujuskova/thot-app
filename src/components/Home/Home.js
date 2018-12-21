import React, { Component } from 'react'
import './Home.scss';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/wallCards/thot-logo.png';
import thot from '../../assets/images/THOT.png'

export class Home extends Component {
    render() {
        return (
        <div className="HomeContainer">

            <div className="HeaderHomeContainer">
                <div className="LogoContainer">
                    <img src={logo} alt="logo" />
                </div>
                <div className="TitleContainer">
                    <img src={thot} alt="name thot"/>
                </div>
            </div>

            <div className="ButtonContainer">
            <NavLink to="/wall"><button className="ui button">Continuer</button></NavLink>
            </div>
        </div>
        )
    }
}

export default Home
