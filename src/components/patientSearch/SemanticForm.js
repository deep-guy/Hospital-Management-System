import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, FormGroup } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other'}
]

class SemanticForm extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            patientFirstName:'',
            patientLastName:'',
            patientID:'',
            patientGender:'',
            patientAge:''
            };
        this.setPatientId = this.setPatientId.bind(this);
        this.setPatientFirstName = this.setPatientFirstName.bind(this);
        this.setPatientLastName = this.setPatientLastName.bind(this);
        // this.setPatientGender = this.setPatientGender.bind(this);
        // this.setPatientAge = this.setPatientAge.bind(this);

    }

    setPatientFirstName(e)
    {
        e.preventDefault();
        this.setState({patientFirstName : e.target.value});
    }

    setPatientLastName(e)
    {
        e.preventDefault();
        this.setState({patientLastName : e.target.value});
    }

    setPatientId(e)
    {
        e.preventDefault();
        this.setState({patientID : e.target.value});
    }

//     {/* setPatientGender(e)
//     {
//         e.preventDefault();
//         this.setState({patientGender : e.target.value});
//     }

//     setPatientAge(e)
//     {
//         e.preventDefault();
//         this.setState({patientAge : e.target.value});
//     }

// handleChange = (e, { value }) => this.setState({ value }) */}

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
            <Form.Field control={Input} label='First name' placeholder='First name' onchange={this.setPatientFirstName} />
            <Form.Field control={Input} label='Last name' placeholder='Last name' onchange={this.setPatientLastName} />
            {/* <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' onchange={this.setPatientGender} /> */}
            <Form.Field control={Input} label='Patient ID' placeholder='eg. HIMS715632' onchange={this.setPatientId} />
            {/* <Form.Field control={Input} label="Age" placeholder='eg. 18' onchange={this.setPatientAge} /> */}
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default SemanticForm
