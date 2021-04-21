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
import Equipedata from './../component/Equipedata'
import Listcompte from './../component/Listcompte'

import Lottie from 'react-lottie';
import Loading from './../images/loading.json'


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

    const [file, setfile] = useState({})
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
      // getcomptecli()
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
  $("#listcompte").hide()
  $("#Equipedata").show()
  $("#filetab").removeClass("active")
  $("#listcompt").removeClass("active")
  $("#dattab").addClass("active")

}

const switchtofile = () =>{
  
  $("#listcompte").hide()
  $("#Equipedata").hide()
  $("#Fileview").show()
  $("#dattab").removeClass("active")
  $("#listcompt").removeClass("active")
  $("#filetab").addClass("active")

}

const switchtocompte = () =>{
  
  $("#Fileview").hide()
  $("#Equipedata").hide()
  $("#listcompte").show()
  $("#dattab").removeClass("active")
  $("#filetab").removeClass("active")
  $("#listcompt").addClass("active")

}


    
    return (

      <>

      {
        loading ? (
          <Lottie 
          options={defaultOptions}
            height={"80%"}
            width={"80%"}
          />
        ) : (
          <>
          <div className=" row col-12 ">

          <header class="page-header">
            <div class="container-fluid">
              <h2 className="no-margin-bottom justify-content-start ">Membre de l'équipe {equipe.Nom_equipe}</h2>
            </div>
          </header> 
          {/* <!-- Breadcrumb--> */}
          <div class="breadcrumb-holder container-fluid">
            <ul class="breadcrumb">
            <li class="breadcrumb-item" ><a href="home" onClick={()=>{history.push("/home")}}>Home </a></li>
              <li class="breadcrumb-item active">{equipe.Nom_equipe}</li>
            </ul>
          </div>

          <div className="row col-12 justify-content-end"> <Button variant="contained"  style={{backgroundColor : "#2DCD94" , textTransform : 'lowercase'}} onClick={(e)=>{toggle()}} startIcon={<AddIcon />} > Import </Button> </div>   
        <div className=" row col-12 justify-content-center text-center " >
            <div id="team-user" className="row col-10 justufy-content-center mt-4 mr-5 " >
                      {chefE.map((user , index)=>(
                          <div id={user.id}  className="card equser shadow cursor  mr-4 ml-4 mt-2 mb-4" style={{width:150 , height:175}} key={index} onClick={()=>{history.push(`/profile/${user.id}`)}} >
                            {/* <div id="user-badge" className=""></div> */}
                            <aside className="ribbonchef">{user.user_level}</aside>
                          <div className="card-body justufy-content-center">
                              <Avatar className="ml-2" style={{width:90, height:90}} alt={user.full_name} src={user.user_img} />
                              <div className="text-center mt-2"style={{fontSize:12}}>{user.full_name ? user.full_name : user.user_email}</div>
                              {/* <span className="text-center mt-1 small">{user.user_level}</span> */}
                          </div>
                          
                        </div>
                      ))}

                      {collab.map((user , index)=>(
                          <div id={user.id}  className="card equser shadow cursor  mr-4 ml-4 mt-2 mb-4" style={{width:150, height:175}} key={index} onClick={()=>{history.push(`/profile/${user.id}`)}} >
                          
                      
                          <aside className="ribbon">{user.user_level}</aside>
                         
                          <div className="card-body justufy-content-center">
                            
                              <Avatar className="ml-2" style={{width:90, height:90}} alt={user.full_name} src={user.user_img} />
                              <div className="text-center mt-2" style={{fontSize:12}}>{user.full_name ? user.full_name : user.user_email}</div>
                              {/* <span className="text-center mt-1 small">{user.user_level}</span> */}
                          </div>
                          
                        </div>
                      ))}
                    
            </div>  
           
         </div>
        
         <div className="row col-12 justify-content-center text-center">
                <ul className="profile-header-tab nav nav-tabs  mt-4 mb-4">
                  <li onClick={()=>{switchtodata()}} className="nav-item"><a id="dattab" href="#" className="nav-link active show" data-toggle="tab">Data</a></li>
                  <li onClick={()=>{switchtocompte()}} className="nav-item"><a id="listcompt" href="#" className="nav-link" data-toggle="tab">Compte</a></li>
                  <li onClick={()=>{switchtofile()}} className="nav-item"><a id="filetab" href="#" className="nav-link" data-toggle="tab">Files</a></li>
                
                </ul>   
                  
            </div>
       
          
    </div>
    <div className="row col-12 justify-content-center text-center mt-5">

      
        
          <>
          <div id="Fileview" style={{display:"none"}} >
          <div className="row justify-content-center d-inline-flex ">

                         
                          {
                              files.map((file,index)=>(
                                <Fileview file={file} updatecom={updatecomplete} index={file.id} socket={props.socket}/>
                              ))
                            }
          </div>
                            
        </div>

        <div id="Equipedata" className="row col-12">
        <Equipedata />
        </div>  

        {/* <div id="listcompte" style={{display:"none" , width:"100%"}}>
        <Listcompte clients={comptecli} />
        </div> */}
        </>
        
   
      
   
    </div>
    </>
        )
      }

           
            <MDBModal  isOpen={open} toggle={()=>toggle()} centered={true} fade={true}  size="" >
      <MDBModalBody>


          <div className="">
          <DropzoneArea
          filesLimit={1}
          showAlerts={false}
          onChange={(files) => {setfile(files[0])}}
          />
          </div>
          <div className="float-right mt-3">
          <Button variant="contained"  style={{backgroundColor : "#2DCD94" , textTransform : 'lowercase'}} onClick={(e)=>{Importfile(e)}}  startIcon={<AddIcon />} > import </Button>
          </div>

      </MDBModalBody>
      </MDBModal>



</>
 
    )
}

export default EquipeView
