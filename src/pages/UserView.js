import React , { useState , useEffect} from 'react'
import axios from 'axios'
import './../css/Profile.css'
import $ from 'jquery'
import Api_url from './../component/Api_url'
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import EditIcon from '@material-ui/icons/Edit';


function UserView(props) {


    const token = localStorage.getItem('token')
    const userId = props.match.params.id
    const [user, setuser] = useState({})

        useEffect(() => {
            const getuser = async () =>{
                const res = await axios({
                    headers: {'Authorization': `Bearer ${token}`},
                    method: 'get',
                    url : `${Api_url}user/${userId}`,
                    });
                  
                   setuser(res.data.user)
              }
              getuser()
        }, [])

           
    return (
        <div className="col-12 justify-content-center " style={{height:"90vh"}}>
          <div class="row">
                <div class="col-lg-4" >
                   <div class="profile-card-4 z-depth-3">
                    <div class="card">
                      <div class="card-body text-center rounded-top" style={{backgroundColor:"#2DCD94"}}>
                       <div class="user-box text-center">
                       <Avatar  style={{width:200, height:200}} className="profile_img cursor" alt="Haboubi amine" src={user ? user.user_img:"" } />
                      </div>
                      <h5 class="mb-1 text-white">{user ? user.full_name:"" }</h5>
                      <h6 class="text-light">{user ? user.user_level:""}</h6>
                     </div>
                      <div class="card-body">
                        <ul class="list-group shadow-none">
                        <li class="list-group-item">
                          <div class="list-icon">
                            <i class="fa fa-phone-square"></i>
                          </div>
                          <div class="list-details">
                            <span>{user ? user.tel:""}</span>
                            <small>Numéro de télephone</small>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="list-icon">
                            <i class="fa fa-envelope"></i>
                          </div>
                          <div class="list-details">
                            <span>{user ? user.user_email:""}</span>
                            <small>Adresse Email</small>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="list-icon">
                            <i class="fa fa-globe"></i>
                          </div>
                          <div class="list-details">
                            <span>{user ? user.Website:""}</span>
                            <small>Website Address</small>
                          </div>
                        </li>
                        </ul>
                        
                       </div>
                      
                     </div>
                   </div>
                </div>
                <div class="col-lg-8">
                   <div class="card z-depth-3">
                    <div class="card-body">
                    <ul class="nav nav-pills nav-pills-primary nav-justified">
                        <li class="nav-item">
                            <a href="javascript:void();" data-target="#profile" data-toggle="pill" class="nav-link active"><i class="icon-user"></i> <span class="hidden-xs">Profile</span></a>
                        </li>
                    </ul>
                    {/* SHOW DATA PROFILE */}
                    <div class="tab-content p-3">
                       
                        <div className="tab-pane active show" id="profile">
                             <form className="col-12">
                            <div className="form-group row" >
                                <label className="col-lg-3 col-form-label text-center form-control-label">Nom et Prénom</label>
                                   <h5 className="mt-2">{user ? user.full_name:"..."}</h5>
                            </div>

                              
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label text-center">Télephone</label>
                                <h6 className="mt-2">{user ? user.tel:"..."}</h6>
                            </div>

                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label text-center">equipe</label>
                                <h6 className="mt-2">{user.Equipe ? user.Equipe.Nom_equipe:""}</h6>
                            </div>

                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label text-center">Service</label>
                                <h6 className="mt-2">{user.Equipe ? user.Equipe.Service.Nom_service:""}</h6>
                            </div>

                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label text-center form-control-label">site</label>
                           
                                <h6 className="mt-2">{user ? user.Website:""}</h6>
                            </div>
                         

                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label text-center">Fax</label>
                                <h6 className="mt-2">{user ? user.fax:""}</h6>
                            </div>

                          

                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label text-center">Adresse</label>
                              
                                <h6 className="mt-2">{user ? user.address:""}</h6>
                            </div>                
                            
                        </form>
           
                        </div>
                    </div>
                </div>
              </div>
              </div>
                
            </div>
       </div>
    )
}

export default UserView
