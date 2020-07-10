import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state={
        isLoggedIn : false,
        userID: '',
        name: '',
        email : '',
        picture : ''
    }

    componentClicked = () => {
        console.log('click');
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID : response.userID,
            name: response.name,
            email: response.email,
            picture : response.picture.data.url
        })
    }

    render() {
        let fbContent;
        this.state.isLoggedIn ? 
        fbContent = (
            <div style={{
                width: '400px',
                margin: 'auto',
                background:'lightgray',
                padding:'20px'
            }}>
                <img src={this.state.picture} alt={this.state.name}/>
                <h2>Welcome, {this.state.name}</h2>
                <p>Email : {this.state.email}</p>
            </div>
        ) : 
        fbContent = (
            <FacebookLogin
                 appId="4043705089035536"
                 autoLoad={true}
                 fields="name,email,picture"
                 onClick={this.componentClicked}
                 callback={this.responseFacebook}
            />  
        )
        
        return (
        <div>{fbContent}</div>
        )
    }
}