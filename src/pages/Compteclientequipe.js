import React , {useState , useEffect} from 'react'
import './../css/clientequipe.css'
import axios from 'axios'
import Api_url from './../component/Api_url'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";

function Compteclientequipe() {

    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'));
    const [equipeclient, setequipeclient] = useState([])
    const history = useHistory();
    
    useEffect(() => {
        const getequipe = async() =>{
          const res = await axios({
            headers: {'Authorization': `Bearer ${token}`},
            method: 'get',
            url : `${Api_url}user/${user.id}`,  
            });
            setequipeclient(res.data.user.Equipe.CompteClients)    
        }
        getequipe()
        
        }, [])



    return (
        <div className="row col-12 justify-content-center">
          

          {
              equipeclient.map((cl,index)=>(
                <div key={index} id={cl.id} class="carde d-flex mx-3 my-3 grow cursor"  onClick={()=>{history.push(`/client/${cl.id}`)}}>
                <div class="firstinfo text-center d-flex justify-content-center">
                    <Avatar src={cl.Clientimg.img_profile} style={{width:70, height:70 , zIndex:10}} className="" />
                   
                    <div class="profileinfo">
                        <h4>{cl.Nom_compteCli}</h4>
                        <p className="bio">{cl.description}</p>
                    </div>
                    </div>
                 </div>
              ))
          }
    
    
        </div>
    )
}

export default Compteclientequipe
