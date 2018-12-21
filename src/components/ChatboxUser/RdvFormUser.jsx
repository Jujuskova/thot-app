import React, { Component } from 'react'
import { Button, Form, Col, Input, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class RdvFormUser extends Component {
    render() {
        return (
        <div className="rdv-form">
            <Form id={this.props.id} style={this.props.style}>
                <h5>Choisissez un créneau</h5>
                <Row >
                    <Col sd={6}>
                        <Input type="text" name="city" id="cityId" placeholder="Lieu" onChange={(e) => this.setState({city: e.target.value})}/>
                    </Col>
                    <Col sd={6}>
                        <Input type="date" name="date" id="dateId" placeholder="Date"  onChange={(e) => this.setState({date: e.target.value})}/>
                    </Col>
                </Row>
                <Button className="rdv-validate-button" onClick={() => this.props.triggerNextStep({value: this.state, trigger: 11})} disabled={this.props.disabled} >Valider</Button>
            </Form>
        </div>
        )
    }
}