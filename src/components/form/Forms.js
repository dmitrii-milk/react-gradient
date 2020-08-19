import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';

export default class Forms extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstColor: '',
            secondColor: '',
            firstColorValid: false,
            secondColorValid: false,
            formValid: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    handleChange(e) {

        const target = e.target;

        if(target.name === 'firstColor' || target.name === 'secondColor') {

            const value = target.value;
            const name = target.name;

            this.setState({[name]: value}, 
              () => { this.validateField(name, value) });
        }

    }

    validateField(fieldName, value) {

      let firstColorValid = this.state.firstColorValid;
      let secondColorValid = this.state.secondColorValid;

      switch(fieldName) {
        case 'firstColor':
          firstColorValid = value.match(/(#{1})([0-9A-F]{3}|[0-9A-F]{6})$/ig);
          firstColorValid = firstColorValid ? true : false;
          break;
        case 'secondColor':
          secondColorValid = value.match(/(#{1})([0-9A-F]{3}|[0-9A-F]{6})$/ig);
          secondColorValid = secondColorValid ? true : false;
          break;
        default: 
          break;

      }
      
      this.setState({firstColorValid: firstColorValid,
                    secondColorValid: secondColorValid
                  }, this.validateForm);
    
    }

    validateForm() {
      this.setState({formValid: this.state.firstColorValid &&  this.state.secondColorValid});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state);

        this.setState({
          firstColor:'',
          secondColor:'',
          firstColorValid: false,
          secondColorValid: false,
          formValid: false
      });
    }

   

    
    render() {
        return (
            <>
            <Form
            onSubmit={this.onSubmit}
            style={{marginTop: '50px'}}>
              <Row>
                <Col md={{ size: 4}}>
                  <FormGroup>
                    <Label for="firstColor">First color</Label>
                    <Input 
                      invalid={!this.state.firstColorValid}
                      valid={this.state.firstColorValid}
                      type="text" 
                      name="firstColor"
                      placeholder="Enter first color"
                      value={this.state.firstColor}
                      onChange={this.handleChange}/>
                    <FormFeedback>
                        Please enter the first color in hex format.
                        For example: #c72727 or #c72
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col md={{size: 4, offset: 4}}>
                  <FormGroup>
                    <Label for="secondColor">Second color</Label>
                    <Input
                      invalid={!this.state.secondColorValid}
                      valid={this.state.secondColorValid}
                      type="text"
                      name="secondColor"
                      placeholder="Enter second color"
                      value={this.state.secondColor}
                      onChange={this.handleChange}/>
                    <FormFeedback>
                        Please enter the second color in hex format.
                        For example: #27c772 or #27c
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col xs={{offset: 4}} sm={{size: 4, offset: 6}} md={{ size: 4, offset: 5 }}>
                    <Button disabled={!this.state.formValid}>Add Gradient</Button>
                </Col>
              </Row>
            </Form>
            </>
          );
    }
 
}
