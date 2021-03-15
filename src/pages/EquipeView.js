import React , { useState , useEffect} from 'react'
import axios from 'axios'
import $ from 'jquery'
import Api_url from './../component/Api_url'
import Avatar from '@material-ui/core/Avatar';

function EquipeView(props) {

    const token = localStorage.getItem('token')
    const [equipe_id, setequipe_id] = useState(props.match.params.id)
    const [chefE, setchefE] = useState([])
    const [collab, setcollab] = useState([])
    const [equipe, setequipe] = useState({})
    const [users, setusers] = useState([])

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
                <div className="col-12 card mt-4  border border-gray" >
                           {chefE.map((user , index)=>(
                               <div id={user.id}  className="card shadow grow col-3  mb-2 mt-2 mr-2 ml-2" key={index} >
                               <div className="card-body d-flex flex-row">
                                   <div className="avatar float-left"> <Avatar style={{width:70, height:70}} alt={user.full_name} src={user.user_img} /></div>
                                   <div id="user_info" className="ml-2">
                                     <h4 className="text-center" style={{fontSize:13}}>{ !user.full_name ? null :user.full_name }</h4>
                                     <h4 className="text-center" style={{fontSize:11}}>{user.user_email}</h4>
                                     <h6 className="text-center" style={{fontSize:13}}>{user.user_level}</h6>
                                   </div>
                               </div>
                              
                             </div>
                           ))}
                         
                </div>

                <div className="col-12 border border-gray mt-4 row">
                {collab.map((user , index)=>(
                                <div id={user.id}  className="card shadow col-3 grow  mb-2 mt-2 mr-2 ml-2" key={index} >
                                <div className="card-body d-flex flex-row">
                                    <div className="avatar float-left"> <Avatar style={{width:70, height:70}} alt={user.full_name} src={user.user_img} /></div>
                                    <div id="user_info" className="ml-2">
                                      <h4 className="text-center" style={{fontSize:13}}>{ !user.full_name ? null :user.full_name }</h4>
                                      <h4 className="text-center" style={{fontSize:11}}>{user.user_email}</h4>
                                      <h6 className="text-center" style={{fontSize:13}}>{user.user_level}</h6>
                                    </div>
                                </div>
                               
                              </div>
                           ))}
                </div>
               
            </div>
 
    )
}

export default EquipeView
