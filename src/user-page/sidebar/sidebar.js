import React from 'react';
import SideWidget from './sidewidget';

import './sidebar.css';


export default function SideBar(){
	return(
		<div>
		<div className = "sidewidget">
		
		<SideWidget />

		</div>

		<div className = "sidewidget">
		
		<SideWidget />

		</div>
		</div>
	);

}