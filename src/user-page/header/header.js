import React from 'react';
import Navbar from './navbar';

import './header.css';


export default function Header() {
  return(
    <div>
      <img
        className="profilePicture"
         src="https://thumb7.shutterstock.com/display_pic_with_logo/2327279/450966901/stock-vector-male-profile-picture-placeholder-vector-illustration-design-social-profile-template-avatar-450966901.jpg"
      />
      <h2 className="username">Name</h2>
      <Navbar />
    </div>
  );
}
