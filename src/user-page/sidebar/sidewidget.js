import React from 'react';
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
 
  render(){
  return(
  	<div>
			<div class = "widgetcontainer">
				<div>
					<h3  className = "widgetheader">Text</h3>
				</div>
				<div className = "widgetfield">
			

				</div>
				<div className = "editbar">
				<button type="button" onClick={this.handleShow}>Edit</button>
				</div>
			</div>
			<ModalBox openModal={this.state.show} close={this.handleClose}/>
		</div>
		);

}}
