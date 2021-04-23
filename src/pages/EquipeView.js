import React , { useState , useEffect} from 'react'
import axios from 'axios'
import $ from 'jquery'
import CircularProgress from '@material-ui/core/CircularProgress';
import Api_url from './../component/Api_url'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter , MDBCol, MDBFormInline , MDBIcon } from 'mdbreact';
import { DropzoneArea } from 'material-ui-dropzone';
import Fileview from './../component/Fileview'
import Equipedata from '../component/Equipe/Equipedata'
import Listcompte from '../component/Equipe/Listcompte'
import Equipesetting from './../component/Equipe/Equipesetting'

import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import BackupIcon from '@material-ui/icons/Backup';
import DescriptionIcon from '@material-ui/icons/Description';

import Lottie from 'react-lottie';
import Loading from './../images/loading.json'
import Import from './../images/import.json'
import Fileempty from './../images/fileempty.json'


function EquipeView(props) {

    const token = localStorage.getItem('token')
    const [equipe_id, setequipe_id] = useState(props.match.params.id)
    const [chefE, setchefE] = useState([])
    const [collab, setcollab] = useState([])
    const [equipe, setequipe] = useState({})
    const [files, setfiles] = useState([])
    const [comptecli, setcomptecli] = useState([])
    const [users, setusers] = useState([])
    const history = useHistory();
    const [open, setopen] = useState(false)

    const [file, setfile] = useState({
      name :""
    })
    const [loading, setloading] = useState(true)

    //add file listiner
    props.socket.on(`${equipe.Roomid}`, (data)=>{
      //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
    setfiles([...files , data.file])
    });


    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Loading,
    };

    const importlotti = {
      loop: true,
      autoplay: true,
      animationData: Import,
    };

   

    //update file :complete
    const updatecomplete = (file)=> {
      file.complete = true
      setfiles(
        files.map(item => 
            item.id === file.id
            ? file  
            : item 
      ))
      }
      


    useEffect(() => {

      const loading_screen = ()=>{
       
        setloading(true)
        setTimeout(() => {
          setloading(false)
        }, 2000);
    $("#Fileview").hide()


    }

      const getcomptecli = async ()=>{
        const res = await axios({
          headers: {'Authorization': `Bearer ${token}`},
          method: 'get',
          url : `${Api_url}equipe/compte/${equipe_id}`,
          });
          setcomptecli(res.data.clients)
      }


      const getequipe = async () =>{
        const res = await axios({
            headers: {'Authorization': `Bearer ${token}`},
            method: 'get',
            url : `${Api_url}equipe/${equipe_id}`,
            });
             setequipe(res.data.equipe)
            //  user_level
            setchefE(res.data.chefE)
            setcollab(res.data.collab)    
            setfiles(res.data.equipe.Files) 

            
      }
      loading_screen()
      getequipe()
      getcomptecli()
    }, [])

const toggle = ()=>{
  setopen(!open)
}

const Importfile = async (e)=>{

  
  // e.preventDefault();
  const formData = new FormData();
  formData.append('csv',file);
  formData.append('equipeid',equipe_id);
  formData.append('ServiceId',equipe.Service.id);
 
  const res = await axios({
    headers: {'Authorization': `Bearer ${token}`},
    method: 'POST',
    url : `${Api_url}Import/csv`,
    data :formData
    
});
if (res.status === 200){
  setopen(!open)
  
}
}





const switchtodata = () =>{
  
  $("#Fileview").hide()
  $("#settings").hide()
  $("#listcompte").hide()
  $("#Equipedata").show()

  $("#filetab").removeClass("active")
  $("#listcompt").removeClass("active")
  $("#dattab").addClass("active")
  $("#setting").removeClass("active")
 

}

const switchtofile = () =>{
  
  $("#listcompte").hide()
  $("#Equipedata").hide()
  $("#Fileview").show()
  $("#settings").hide()

  $("#dattab").removeClass("active")
  $("#listcompt").removeClass("active")
  $("#filetab").addClass("active")
  $("#setting").removeClass("active")
  
}

const switchtocompte = () =>{
  
  $("#Fileview").hide()
  $("#Equipedata").hide()
  $("#listcompte").show()
  $("#settings").hide()

  $("#dattab").removeClass("active")
  $("#filetab").removeClass("active")
  $("#listcompt").addClass("active")
  $("#setting").removeClass("active")


}

const switchtosetting = () =>{
  
  $("#Fileview").hide()
  $("#listcompte").hide()
  $("#Equipedata").hide()
  $("#settings").show()
  $("#dattab").removeClass("active")
  $("#filetab").removeClass("active")
  $("#listcompt").removeClass("active")
  $("#setting").addClass("active")

}


    
    return (

      <>

      {
        loading ? (
          <Lottie 
          options={defaultOptions}
            height={"80%"}
            width={"80%"}
            isClickToPauseDisabled={true}
          />
        ) : (
          <>
          <div className=" row col-12 ">
          <header className="page-header">
            <div className="container-fluid">
              <h2 className="no-margin-bottom justify-content-start ">Membre de l'équipe {equipe.Nom_equipe}</h2>
            </div>
          </header> 
          {/* <!-- Breadcrumb--> */}
          <div className="breadcrumb-holder container-fluid">
            <ul className="breadcrumb">
            <li className="breadcrumb-item" ><a href="home" onClick={()=>{history.push("/home")}}>Home </a></li>
              <li className="breadcrumb-item active">{equipe.Nom_equipe}</li>
            </ul>
          </div>

          <div className="row col-12 justify-content-end">
             <IconButton  onClick={(e)=>{toggle()}} className="mt-1" color="primary"  aria-label="upload picture" component="span">
                  <BackupIcon  fontSize="large" style={{color:'#2DCD94'}}/>
            </IconButton> </div>   
        <div className=" row col-12 justify-content-center text-center " >
            <div id="team-user" className="row col-12 justufy-content-center mt-4  " >
                      {chefE.map((user , index)=>(
                          <div id={user.id}  className="card equser shadow cursor  mr-4 ml-4 mt-2 mb-4" style={{width:150 , height:175}} key={index} onClick={()=>{history.push(`/profile/${user.id}`)}} >
                      
                            <aside className="ribbonchef">{user.user_level}</aside>
                          <div className="card-body justufy-content-center">
                              <Avatar className="ml-2" style={{width:90, height:90}} alt={user.full_name} src={user.user_img} />
                              <div className="text-center mt-2"style={{fontSize:12}}>{user.full_name ? user.full_name : user.user_email}</div>
                          </div>
                          
                        </div>
                      ))}

                      {collab.map((user , index)=>(
                          <div id={user.id}  className="card equser shadow cursor  mr-4 ml-4 mt-2 mb-4" style={{width:150, height:175}} key={index} onClick={()=>{history.push(`/profile/${user.id}`)}} >
                          
                      
                          <aside className="ribbon">{user.user_level}</aside>
                         
                          <div className="card-body justufy-content-center">
                            
                              <Avatar className="ml-2" style={{width:90, height:90}} alt={user.full_name} src={user.user_img} />
                              <div className="text-center mt-2" style={{fontSize:12}}>{user.full_name ? user.full_name : user.user_email}</div>
                           
                          </div>
                          
                        </div>
                      ))}
                    
            </div>  
           
         </div>
        
         <div className="row col-12 justify-content-center text-center" >
                <ul className="profile-header-tab nav nav-tabs  mt-4 mb-4" style={{backgroundColor:"#E9ECEF"}}>
                  <li onClick={()=>{switchtodata()}} className="nav-item"><span id="dattab" href="#" className="nav-link active show cursor" data-toggle="tab">Data</span></li>
                  <li onClick={()=>{switchtocompte()}} className="nav-item"><span id="listcompt" href="#" className="nav-link cursor" data-toggle="tab">Compte</span></li>
                  <li onClick={()=>{switchtofile()}} className="nav-item"><span id="filetab" href="#" className="nav-link cursor" data-toggle="tab">Files</span></li>
                  <li onClick={()=>{switchtosetting()}}className="nav-item"><span id="setting" href="#" className="nav-link cursor" data-toggle="tab"><i className="fas fa-cog"></i></span></li>
                
                </ul>   
                  
            </div>
       
          
    </div>
    <div className="row col-12 justify-content-center text-center mt-5">

      
        
          <>
          

        <div id="Equipedata" className="row col-12" style={{minHeight:800}}>
        <Equipedata />
        </div>  

        <div id="Fileview" style={{display:"none"}} style={{minHeight:800}}>
          <div className="row justify-content-center d-inline-flex ">


            {
              files.length === 0 ? (
                <DescriptionIcon  fontSize="large" style={{color:'#00000'}}/>
              ):(
                
                  files.map((file,index)=>(
                    <Fileview file={file} updatecom={updatecomplete} index={index} socket={props.socket}/>
                  ))
                
              )
            }

                         
                         
          </div>
                            
        </div>

        <div id="listcompte" style={{display:"none" , width:"100%"}}>
        <Listcompte clients={comptecli} />
        </div>

        <div id="settings" style={{display:"none" , width:"100%"}}>
        <Equipesetting />
        </div>
        </>

      
      
      
   
    </div>
    </>
        )
      }

           
            <MDBModal  isOpen={open} toggle={()=>toggle()} centered={true} fade={true}  size="" >
      <MDBModalBody>


          <div className="drop-file">
         
          <input onChange={() => {setfile(document.getElementById('importfile').files[0])}}  id="importfile" type="file"  style={{display:'none'}}  required/>
         
            <Lottie 
            options={importlotti}
            height={"80%"}
            width={"80%"}
            isClickToPauseDisabled={true}
          />
          <div className="row col-12 justify-content-center">
          <label htmlFor="importfile">
                <IconButton className="ml-4" color="primary"  aria-label="upload picture" component="span">
                  <AttachFileIcon fontSize="large" style={{color:'#2DCD94'}}/>
                </IconButton>
              </label>
          </div>

           <div className="mt-5" style={{minHeight : 60}}>
           {
          file.name !== "" ? (
            <div  className="d-flex flex-row">
            <i  style={{color:"#2DCD94"}} className="far fa-file-excel fa-4x ml-5"></i>
            <span style={{fontSize:12}} className="ml-3">{file.name}</span>
            </div>
          ) : (null)
        }
          </div> 
      
          </div>
          <div className="float-right mt-3">
          <IconButton  onClick={(e)=>{Importfile(e)}} className="mt-5" color="primary"  aria-label="upload picture" component="span">
                  <BackupIcon  fontSize="large" style={{color:'#2DCD94'}}/>
            </IconButton>
        
          </div>

      </MDBModalBody>
      </MDBModal>



</>
 
    )
}

export default EquipeView