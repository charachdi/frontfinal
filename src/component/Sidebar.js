import React, { useState, useEffect } from "react";
import './../css/sidebar.css'
import './../js/sidebar'
import Avatar from '@material-ui/core/Avatar';
import profile from './../images/profile.jpg'
import { Logout } from "../redux/actions/authAction";
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import $ from 'jquery'
function Sidebar() {


  const history = useHistory();
  const dispatch = useDispatch();
  
  const [url, seturl] = useState("")
  const [fullname, setfullname] = useState("")
  const user = JSON.parse(localStorage.getItem('user')) ;
  
  

  useEffect(() => {
   
    const info = () =>{
     

    }

    info()
  }, [])
  
  

  const handelLogout = () =>{
      dispatch( Logout() );
      seturl("")
      window.setTimeout(() => {
        window.location.replace("/"); 
            }, 500);
  
  }

  

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

          <Avatar  style={{width:80, height:80}} className="profile_img cursor" alt="Haboubi amine" src={user.user_img } onClick={()=>{history.push("/myprofile")}} />
          </div>
        <h6 id="username" className="text-capitalize">{user.full_name}</h6>
        
          </li>
          <li className="active">
            <a className="text-left hover" onClick={()=>{history.push("/home")}}><i className="fas fa-user-friends mr-3"></i>Comptes</a>
          </li>
          <li>
              <a className="text-left hover" onClick={()=>{history.push("/equipe")}}><span className="fa fa-user mr-3"></span>equipes</a>
          </li>
          <li>
            <a className="text-left hover" onClick={()=>{history.push("/service")}}><span className="fa fa-cogs mr-2"></span> Services</a>
          </li>
          <li>
            <a className="text-left hover"  onClick={()=>{history.push("/client")}}><span className="fa fa-sticky-note mr-3"></span> Clients</a>
          </li>
          <li>
            <a className="text-left" href="#"><span className="fa fa-suitcase mr-3"></span> Gallery</a>
          </li>
         
          <li>
            <a className="text-left" href="#"><span className="fa fa-paper-plane mr-3"></span> Contacts</a>
          </li>
          <li>
            <a className="text-left" href="#" onClick={()=>{handelLogout()}}><i class="fas fa-sign-out-alt mr-3" style={{color:'red'}}></i> logout</a>
          </li>
        </ul>
  
        
  
       
  
      </div>
    </nav>
        
    )
}

export default Sidebar
