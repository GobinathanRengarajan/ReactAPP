import React, { Component } from 'react';
import { NavLink } from "react-router-dom";



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false
    }

  }



  render() {
    return (
      <div className="header">
        <div className="full-width">
  <div class="col-md-1 col-sm-1 col-xs-12 nopad">
  <nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
    </ul>
  </div>
  <div class="MenuTitle"> Menu </div>
</nav>   
</div>
<div class="col-md-10 col-sm-10 col-xs-12">
<div class ="Logo"> 
<img src={process.env.PUBLIC_URL + '/Images/logo_img.png'} alt="logo" />
</div>
</div>
<div class="col-md-1 col-sm-1 col-xs-12">
<div class="logout"> <i className="fa fa-power-off" aria-hidden="true"></i></div>
</div>
</div>
</div>
    );
  }
}

export default Header;
