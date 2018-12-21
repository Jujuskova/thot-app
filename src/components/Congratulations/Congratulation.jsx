import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import AddToCalendar from 'react-add-to-calendar';
import { connect } from 'react-redux'
import './congratulations.scss'
import logo from '../../assets/images/wallCards/thot-logo.png';
import {NavLink} from 'react-router-dom';
import queryString from 'query-string';

const fakeData = {username: 'John', date: '25/12/2018', city: 'Marseille', address: 'Parc Longchamp', position: [43.296482, 5.369780]}
const event = {
  title: 'Sample Event',
  description: 'This is the sample event provided as an example only',
  location: 'Portland, OR',
  startTime: '2016-09-16T20:15:00-04:00',
  endTime: '2016-09-16T21:45:00-04:00'
}

const {rebecca, eric, david, john, julie, aurelie} = require('../../utils/fake')
const users = [rebecca, eric, david,  john, julie, aurelie]

export class Congratulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      city: "",
      theUser: []
    }
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    this.setState({date: values.date, city: values.ville})

    let userParams = this.props.match.params.name
    users.map( user => {
        if (user.firstname === userParams) {
            this.setState({theUser: user})
        }
    })
  }


  render() {
    // const {username, date, city, address} = this.props;
    const {username, date, city, address, position} = fakeData;

    return (
      <div className="centeredContainer">
        <i class="fas fa-share-alt"></i>
        <img src={logo} alt="logo" />
      <div className="CongratulationsMessageContainer">
          <h1>Félicitations !</h1>
          <h3>
          Vous avez bloqué un créneau pour le {this.state.date} à {this.state.city} !
          </h3>
        </div>
        <div className="mapContainer">
        {
        this.state.theUser.firstname ?
          <Map center={[this.state.theUser.location.lat, this.state.theUser.location.lng]} zoom={13}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <span>{'marker.name'}</span>
              </Popup>
            </Marker>
          </Map>
          :
          <Map center={position} zoom={13}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <span>{'marker.name'}</span>
              </Popup>
            </Marker>
          </Map>
          }
        </div>
        {/* <div className="addToCalendarContainer">
          <AddToCalendar event={event}/>
        </div> */}
        <button className="ui button"><NavLink to='/wall'>Retour à l'accueil</NavLink></button>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Congratulation)
