import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import {NavLink} from 'react-router-dom';

import './chatboxUser.scss'
import RdvComponent from './RdvComponent';
import RdvFormUser from './RdvFormUser';

const {rebecca, eric, david, john, julie, aurelie} = require('../../utils/fake')
const users = [rebecca, eric, david,  john, julie, aurelie]
const theme = {
    background: '#f5f8fb',
    headerBgColor: '#f5f8fb',
    headerFontColor: '#222',
    botBubbleColor: '#eaebeb',
    botFontColor: '#222',
    userBubbleColor: '#f6e27f',
    userFontColor: '#222',
    };

class ChatboxUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showForm: false,
            name: "",
            city:"",
            date: "",
            trigger: false,
            theUser: [],
            steps: [
                {
                    id: '1',
                    message: `Vous avez entamé une conversation avec ${this.props.match.params.name} `,
                    trigger: '2',
                },
                {
                    id: '2',
                    user: true,
                    trigger: '3',
                    },
                {
                    id: '3',
                    message: `Salut ! Cool est ce que tu as déjà de l’expérience dans le domaine ou pas du tout ? `,
                    trigger: '4',
                },
                {
                    id: '4',
                    user: true,
                    trigger: '5',
                    },
                {
                    id: '5',
                    message: 'Ok ! Pas de soucis ! On pourrait commencer par les bases et voir par la suite.',
                    trigger: '6',
                },
                {
                    id: '6',
                    user: true,
                    trigger: '7',
                    },
                {
                    id: '7',
                    message: 'haha ! Timing parfait alors ! Je t’envoie donc la demande de créneau !',
                    trigger: '8'
                },
                // proposition du chatbot (accepter ou refuser)
                {
                    id: '8',
                    component: <RdvComponent />,
                    waitAction: true,
                    trigger: '9',
                },
                // porposition de l'utilisateur, automatiquement accepté par le bot
                {
                    id: '9',
                    component: <RdvFormUser nameUser={this.props.match.params.name} disabled={false}/>,
                    waitAction: true,
                },
                // proposition du bot accepté par l'utilisateur
                {
                    id: '10',
                    message: ({ previousValue, steps }) => `Très bien, je vous dis au 12-18-2018, à Marseille`,
                    
                },
                // proposition de l'utilisateur accepté par le bot
                {
                    id: '11',
                    message: ({ previousValue, steps }) => `Très bien, je vous dis au ${previousValue.date}, à ${previousValue.city}`,
                    end: true
                },
            ],
        }
        this.handleEnd = this.handleEnd.bind(this)
    }

    componentDidMount = () => {
        let userNameParams = this.props.match.params.name
        users.map( user => {
            if (user.firstname === userNameParams) {
                this.setState({theUser: user})
            }
        })
        }

    handleEnd({ steps, values}) {
        console.log(values)
        this.props.history.push(`/congratulation/${this.props.match.params.name}?ville=${values[values.length - 1].city}&date=${values[values.length - 1].date}`)
    }

    toggleForm = () => {
        let formContainer = document.getElementById('rdvForm');
        let chatContainer = document.querySelector('.rsc')
        console.log(chatContainer)
        if (this.state.showForm) {
            formContainer.style.display = 'none'
            chatContainer.style.height = '90vh'
        } else {
            formContainer.style.display = 'block'
            chatContainer.style.height = '73vh'
        }
        this.setState({showForm: !this.state.showForm})
    }

    render() {
        let { theUser } = this.state
        return (
            <div className="chatboxUser-container">
                <NavLink to={`/user/${this.props.match.params.name}`} className="button-backProfile">
                    <i className="fas fa-arrow-left"></i>
                </NavLink>
                <ThemeProvider theme={theme}>
                { theUser.firstname &&
                <ChatBot
                    botAvatar={require(`../../assets/images/wallCards/avatars/${this.props.match.params.name}.jpg`)}
                    headerTitle={`${theUser.firstname} ${theUser.lastname}`}
                    customDelay="5"
                    hideUserAvatar
                    steps={this.state.steps}
                    handleEnd={this.handleEnd}
                    placeholder="Ecrire un message"
                    />
                }
                </ThemeProvider>
                    <hr/>
                <div className="rdv-box" onClick={() => this.toggleForm()}><i className="fas fa-calendar-alt"></i></div>
                <RdvFormUser id="rdvForm" style={{display: "none"}} disabled nameUser={this.props.match.params.name} />
            </div>
        )
    }
}

export default ChatboxUser;