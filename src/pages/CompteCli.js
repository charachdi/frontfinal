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
import Permission from './../component/Permission'
// import { mdbTableEditor } from 'mdb-table-editor'


function CompteCli(props) {
    const token = localStorage.getItem('token')
    const client_id = props.match.params.id
    const [client, setclient] = useState({})
    const history = useHistory();
    const [Auths, setAuths] = useState([])

    const [profimg, setprofimg] = useState({})
    const [service, setservice] = useState({})
    const [equipe, setequipe] = useState({})

    useEffect(() => {

      // const getcurrentuser = async()=>{
      //   const user =JSON.parse(localStorage.getItem('user')) ;
      //   const currentuser = await axios({
      //     headers: {'Authorization': `Bearer ${token}`},
      //     method: 'get',
      //     url : `${Api_url}user/${user.id}`,  
      //     });
         
      
      //  }
   // fonction affiche table
    const getequipelist = async ()=>{
      const res = await axios({
        headers: {'Authorization': `Bearer ${token}`},
        method: 'get',
        url : `${Api_url}clients/${client_id}`,  
        });
        setAuths(res.data.compteCli.Auths)
        setclient(res.data.compteCli)
        setprofimg(res.data.compteCli.Clientimg)
        setequipe(res.data.compteCli.Equipe)
        setservice(res.data.compteCli.Service)
        const user =JSON.parse(localStorage.getItem('user')) ;
        res.data.compteCli.Auths.forEach(au => {
          if(au.UserId === user.id){
              // Permission.Read
            if(au.Permission.Read === "false"){
              console.log("true") 
              history.push('/compteclient')
            }
          }
     });

        
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
 <header  className="page-header">
            
          </header>
          {/* <!-- Breadcrumb--> */}
          <div className="breadcrumb-holder container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="home" onClick={()=>{history.push("/home")}}>Home</a></li>
              <li className="breadcrumb-item active">Clients</li>
              <li className="breadcrumb-item active">{client.Nom_compteCli}</li>
            </ul>
          </div>
      


        <div className="row  justify-content-center">
            <div className="col-12 text-center">
            

{/* Profile client */}
  



    <div className="z-depth-3">
            <div className="profile-header-cover">
            <img  id="client-background" style={{width:"100%"}}  src={profimg.img_background}   />
            </div>
            <div className="profile-header-content">
                <div className="profile-header-img ">
                
                   <div id="client-image" className="row ml-2">
                   <span ><Avatar  src={profimg.img_profile} className="mb-4" style={{width:140,height:140}} alt=""/></span> 
                   <h4 className="mt-5 ml-2" style={{color: client.Theme ? client.Theme.Color : "black"}} >{client.Nom_compteCli}</h4>
                   </div>
                  
                </div>

                <div className="profile-header-info text-right">
                   
                    <h6 className="mr-4 ">{service.Nom_service} / {equipe.Nom_equipe}</h6>
                    
                    
                    {/* <Button href="#" color="primary"><EditIcon />Edit Profile</Button> */}
                </div>
            </div>

        <ul className="profile-header-tab nav nav-tabs row col-12 mb-4 justify-content-center">
            <li className="nav-item"><a href="#profile-post" className="nav-link" data-toggle="tab">POSTS</a></li>
            <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
            <li className="nav-item"><a href="#profile-photos" className="nav-link" data-toggle="tab">STUFF</a></li>
            <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">CHARTS</a></li>
            <li className="nav-item"><a href="#profile-friends" className="nav-link active show" data-toggle="tab">DATA</a></li>
        </ul>
    </div>


            <div className="row col-12 mb-2">
              <Permission clientID={client_id} cuurentclient={client}/>
            </div>
            </div>
            </div>
            
            </div></>
      
    );
}

export default CompteCli