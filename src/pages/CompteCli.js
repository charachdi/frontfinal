import React , {useState , useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import './../css/Home.css'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter , MDBCol, MDBFormInline , MDBIcon } from 'mdbreact';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios'
import $ from 'jquery'
import Api_url from './../component/Api_url';
import { ToastContainer, toast } from 'react-toastify';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
// import { mdbTableEditor } from 'mdb-table-editor'


function CompteCli(props) {
    const token = localStorage.getItem('token')
    const client_id = props.match.params.id
    const [client, setclient] = useState({})
    const history = useHistory();


    const [profimg, setprofimg] = useState({})
    const [service, setservice] = useState({})
    const [equipe, setequipe] = useState({})

    useEffect(() => {
   // fonction affiche table
    const getequipelist = async ()=>{
      const res = await axios({
        headers: {'Authorization': `Bearer ${token}`},
        method: 'get',
        url : `${Api_url}clients/${client_id}`,  
        });
        console.log(res)
        setclient(res.data.compteCli)
        setprofimg(res.data.compteCli.Clientimg)
        setequipe(res.data.compteCli.Equipe)
        setservice(res.data.compteCli.Service)
    }

    getequipelist()
    }, [])
  
    
console.log()


    return (
      <>
      <div className="comptecli">
          
      
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      
   
 {/* <!-- Page Header--> */}
 <header  class="page-header">
            <div class="container-fluid">
              <h2 class="no-margin-bottom">Compte Client</h2>
            </div>
          </header>
          {/* <!-- Breadcrumb--> */}
          <div class="breadcrumb-holder container-fluid">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><a href="home" onClick={()=>{history.push("/home")}}>Home</a></li>
              <li class="breadcrumb-item active">Clients</li>
              <li class="breadcrumb-item active">{client.Nom_compteCli}</li>
            </ul>
          </div>
      


        <div className="row  justify-content-center">
            <div className="col-12 text-center">
            

{/* Profile client */}
  



    <div >
            <div className="profile-header-cover">
            <img  id="client-background" style={{width:"100%"}}  src={profimg.img_background}   />
            </div>
            <div className="profile-header-content">
                <div className="profile-header-img ">
                
                   <div id="client-image" className="row ">
                   <span ><Avatar  src={profimg.img_profile} className="mb-4" style={{width:140,height:140}} alt=""/></span> 
                   <h4 className="mt-5 ml-2" style={{color: client.Theme ? client.Theme.Color : "black"}} >{client.Nom_compteCli}</h4>
                   </div>
                  
                </div>

                <div className="profile-header-info index">
                   
                    
                    <p className="m-b-sm">{service.Nom_service}</p>
                    <p className="m-b-sm">{equipe.Nom_equipe}</p>
                    
                    <Button href="#" color="primary"><EditIcon />Edit Profile</Button>
                </div>
            </div>

        <ul className="profile-header-tab nav nav-tabs col-12 mb-4">
            <li className="nav-item"><a href="#profile-post" className="nav-link" data-toggle="tab">POSTS</a></li>
            <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
            <li className="nav-item"><a href="#profile-photos" className="nav-link" data-toggle="tab">STUFF</a></li>
            <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">CHARTS</a></li>
            <li className="nav-item"><a href="#profile-friends" className="nav-link active show" data-toggle="tab">DATA</a></li>
        </ul>
    </div>


            <div className="row col-12 mb-2">
              {client_id}
            </div>
            </div>
            </div>
            
            </div></>
      
    );
}

export default CompteCli