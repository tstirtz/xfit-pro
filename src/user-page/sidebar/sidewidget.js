import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import ModalBox from '../modal/modal';

export default class SideWidget extends React.Component {
	constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
		console.log("handleClose called");
		
    this.setState({ show: false });
  }

  handleShow() {
		console.log("Handle show called");
		
    this.setState({ show: true });
  }
 
  render() {
  return(
		<div>
			<div className = "widgetcontainer">
				<div>
					<h3  className = "widgetheader">Text</h3>
				</div>
				<div className = "widgetfield">
			

				</div>
				<div className = "editbar">
					<button type="button" onClick={this.handleShow}>Edit</button>
				</div>
			</div>
			<ModalBox
				body={
					<div>
					<form>
						<label htmlFor="workout-stats">Workout Stats</label>
						<input type="text" id="workout-stats"/>
					</form>
					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Workout</ControlLabel>
						<FormControl componentClass="select" placeholder="select">
							<option>Select Workout</option>
							<option value="WOD A">WOD A</option>
							<option value="WOD B">WOD B</option>
							<option value="WOD C">WOD C</option>
							<option value="WOD D">WOD D</option>
							<option value="WOD E">WOD E</option>
							<option value="WOD F">WOD B</option>
						</FormControl>
					</FormGroup>
				</div>
				}
				openModal={this.state.show}
				close={this.handleClose}/>
		</div>
		);
}}
