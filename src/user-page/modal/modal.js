import React from 'react';
import { Modal } from 'react-bootstrap';

this.handleClose = this.handleClose.bind(this);
handleClose(){
	this.setState({show:false});
}

export default function Modal() {
  return(
  	<div>
  	<Modal>
  		<Modal.header closeButton>
  			<Modal.Title>Title</Modal.Title>
  		</Modal.Header>
  		<Modal.Body>
  			<h4>Content</h4>
  		</Modal.body>
  		<Modal.FooteR>
  			<Button onclick ={this.handleClose}>Close</Button>
  		</Modal.footer>
  	</Modal>
  	</div>
  	)}
