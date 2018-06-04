import React from 'react';
//import '../user-page/modal/modal.js';
import {Modal, Button} from 'react-bootstrap';

 export default function SideWidget(){
class SideWidget extends React.Component {
constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
 
  render(){
  return(
  	<div>
  	<Modal>
  		<Modal.Header closeButton>
  			<Modal.Title>Title</Modal.Title>
  		</Modal.Header>
  		<Modal.Body>
  			<h4>Content</h4>
  		</Modal.Body>
  		<Modal.Footer>
  			<Button onclick ={this.handleClose}>Close</Button>
  		</Modal.Footer>
  	</Modal>
  
		<div class = "widgetcontainer">
			<div>
				<h3  className = "widgetheader">Text</h3>
			</div>
			<div className = "widgetfield">
		

			</div>
			<div className = "editbar">
			<a href= "" className = "editlink" onClick={this.handleShow}>Edit</a>
			</div>
		</div>
		</div>
		);

}}}