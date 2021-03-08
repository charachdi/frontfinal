import React, { useState, useEffect } from "react";
import './../css/sidebar.css'
import './../js/sidebar'
import Avatar from '@material-ui/core/Avatar';
import profile from './../images/profile.jpg'

function Sidebar() {

    return (
       
      <nav id="sidebar">
      <div className="custom-menu">
        <button type="button" id="sidebarCollapse" className="btn btn-success">
          <i className="fa fa-bars"></i>
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
      <div className="p-4">
      
        <ul className="list-unstyled components mb-5">
        <li className="text-center d-flex flex-column mb-3">
          <div className="d-flex justify-content-center mb-2">
          <Avatar style={{width:80, height:80}} alt="Haboubi amine" src={profile} />
          </div>
        <h6 className="text-capitalize">haboubi amine</h6>
        
          </li>
          <li className="active">
            <a className="text-left" href="#"><i className="fas fa-user-friends mr-3"></i> account</a>
          </li>
          <li>
              <a className="text-left" href="#"><span className="fa fa-user mr-3"></span> About</a>
          </li>
          <li>
            <a className="text-left" href="#"><span className="fa fa-briefcase mr-3"></span> Works</a>
          </li>
          <li>
            <a className="text-left" href="#"><span className="fa fa-sticky-note mr-3"></span> Blog</a>
          </li>
          <li>
            <a className="text-left" href="#"><span className="fa fa-suitcase mr-3"></span> Gallery</a>
          </li>
          <li>
            <a className="text-left" href="#"><span className="fa fa-cogs mr-3"></span> Services</a>
          </li>
          <li>
            <a className="text-left" href="#"><span className="fa fa-paper-plane mr-3"></span> Contacts</a>
          </li>
        </ul>
  
        
  
       
  
      </div>
    </nav>
        
    )
}

export default Sidebar
