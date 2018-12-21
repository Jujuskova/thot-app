import React, { Component } from 'react'
import './keyWord.scss';

import fish from '../../assets/images/wallCards/icons/046-fishing.png'
import food from '../../assets/images/wallCards/icons/food.png'
import gamepad from '../../assets/images/wallCards/icons/gamepad.png'
import sport from '../../assets/images/wallCards/icons/yin-yang.png'
import music from '../../assets/images/wallCards/icons/musical-note.png'
import coding from '../../assets/images/wallCards/icons/coding.png'

const {rebecca, eric, david, john, julie, aurelie} = require('../../utils/fake')
const users = [rebecca, eric, david, john, julie, aurelie]

export class keyWord extends Component {
render() {
    console.log("the users = ",users)
    // style={{display: 'none'}}
    return (
    <div className="KeyWordsContainer" >
        <img onClick={() => this.props.filteredFunction("fish")}src={fish} alt="fishing" />
        <img onClick={() => this.props.filteredFunction("food")}src={food} alt="food" />
        <img onClick={() => this.props.filteredFunction("game")}src={gamepad} alt="gamepad" />
        <img onClick={() => this.props.filteredFunction("sport")}src={sport} alt="sport" />
        <img onClick={() => this.props.filteredFunction("music")}src={music} alt="music" />
        <img onClick={() => this.props.filteredFunction("code")}src={coding} alt="coding" />
    

    </div>
    )
}
}

export default keyWord
