import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import axios from 'react-axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
        var self = this;
        const statusURL = `http://localhost:8080/getStatus?score= ${this.state.value}`;


        axios.get(statusURL)
            .then(function (response) {
                if (response.data) {
                    self.setState({
                        vehicleList: response.data
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <br/><br/>
                    Enter your Name and Credit score for the application
                </p>
                <br/>

                <form onSubmit={this.handleSubmit}>

                    <div class="form-group">
                        <label for="creditscore">Credit Score : </label>
                        <input type="text" class="form-control" id="Credit Score" value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
            </div>
        );
    }
}


export default App;
