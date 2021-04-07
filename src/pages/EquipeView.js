import React , { useState , useEffect} from 'react'
import axios from 'axios'
import $ from 'jquery'
import Api_url from './../component/Api_url'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
function EquipeView(props) {

    const token = localStorage.getItem('token')
    const [equipe_id, setequipe_id] = useState(props.match.params.id)
    const [chefE, setchefE] = useState([])
    const [collab, setcollab] = useState([])
    const [equipe, setequipe] = useState({})
    const [users, setusers] = useState([])
    const history = useHistory();


    useEffect(() => {
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
      }
      getequipe()
    }, [])


    
    return (

            

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
                        <ul className="profile-header-tab nav nav-tabs  mt-4">
                          <li className="nav-item"><a href="#profile-post" className="nav-link" data-toggle="tab">POSTS</a></li>
                          <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
                          <li className="nav-item"><a href="#profile-photos" className="nav-link" data-toggle="tab">STUFF</a></li>
                          <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">CHARTS</a></li>
                          <li className="nav-item"><a href="#profile-friends" className="nav-link active show" data-toggle="tab">DATA</a></li>
                        </ul>          
                    </div>
               
               
            </div>
 
    )
}

export default EquipeView
