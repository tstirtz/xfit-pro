import React from 'react';
import { Modal, Button } from 'react-bootstrap';



export default function ModalBox(props) {
		return (
			<div>
				{ props.openModal &&
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{props.body}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={props.close}>Close</Button>
					</Modal.Footer>
				</Modal.Dialog>
				}
			</div>
			);
}
