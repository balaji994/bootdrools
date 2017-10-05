import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {creditStatus:{message:"Please Enter the CreditScore"}};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        var self = this;
        const statusURL =`http://localhost:8080/getMessage?cScore=`+document.getElementById("in").value;
        axios.get(statusURL)
            .then(function (response) {
                if (response.data) {
                    self.setState({
                        creditStatus: response.data
                    })
                }
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <br/>
                <div className="container">


                    <div className="col-md-10">
                        <div className="form-group">

                            <label>

                            </label>
                            <input className="form-control" type="text" id= "in"   />
                        </div>
                        <input className="btn btn-primary" type="button" value="submit" onClick={this.handleChange}/>

                    </div>
                    <div>
                        {alert(this.state.creditStatus.message)}
                    </div>
                </div>
            </div>

        );
    }
}

export default App;