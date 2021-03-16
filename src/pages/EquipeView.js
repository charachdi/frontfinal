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
      
            <div className=" row col-12 justify-content-center text-center">


                <div className="col-12  " >
                          <h1>{equipe.Nom_equipe} /</h1>
                </div>
                <div id="team-user" className="row justufy-content-center mt-4" >
                           {chefE.map((user , index)=>(
                               <div id={user.id}  className="card shadow grow mr-2 ml-2 mt-2 mb-4" style={{width:150 , height:175}} key={index} onClick={()=>{history.push(`/profile/${user.id}`)}} >
                               <div className="card-body justufy-content-center">
                                  <Avatar className="ml-2" style={{width:90, height:90}} alt={user.full_name} src={user.user_img} />
                                   <div className="text-center mt-2">{user.full_name}</div>
                                   <span className="text-center mt-1 small">{user.user_level}</span>
                               </div>
                              
                             </div>
                           ))}

                          {collab.map((user , index)=>(
                               <div id={user.id}  className="card shadow grow mr-2 ml-2 mt-2 mb-4" style={{width:150, height:175}} key={index} onClick={()=>{history.push(`/profile/${user.id}`)}} >
                               <div className="card-body justufy-content-center">
                                  <Avatar className="ml-2" style={{width:90, height:90}} alt={user.full_name} src={user.user_img} />
                                   <div className="text-center mt-2">{user.full_name}</div>
                                   <span className="text-center mt-1 small">{user.user_level}</span>
                               </div>
                              
                             </div>
                           ))}
                         
                </div>

               
               
            </div>
 
    )
}

export default EquipeView
