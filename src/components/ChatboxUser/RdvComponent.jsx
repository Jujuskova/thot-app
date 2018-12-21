import React, { Component } from 'react'
import { Button, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class RdvComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "Marseille",
            date: "12-12-2019",
        }
    }

    render() {
        return (
        <div className="rdv-component-container">
            <p>Je te propose le créneau du {this.state.date} à {this.state.city}</p>
            <div className="chat-proposal">
                
                    <Button color="danger" onClick={() => this.props.triggerNextStep({trigger: 9})}>Refuser</Button>
                    {/* <Button color="success" onClick={() => this.props.triggerNextStep({trigger: 10})}> */}
                    <NavLink to={`/congratulation/user?ville=${this.state.city}&date=${this.state.date}`} className="button-chat-acceptation">Accepter</ NavLink>
                    {/* </Button> */}
            </div>
        </div>
        )
    }
}
