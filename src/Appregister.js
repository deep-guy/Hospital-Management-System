import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import SemanticForm from './components/patientSearch/SemanticForm';
import RegisterPatient from './components/registerPatient/RegisterPatient';

export default class Appregister extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          A robust, failsafe, web-based administration system.
        </p>
        <div classname="Input-form">
            <header className="Form-header">Patient Registration</header>
            <RegisterPatient />
        </div>
      </div>
    );
  }
}