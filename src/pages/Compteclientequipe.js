import React , {useState , useEffect} from 'react'
import './../css/clientequipe.css'
import axios from 'axios'
import Api_url from './../component/Api_url'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import accesdenied from './../images/ad.png'

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
            console.log(res.data.user.Equipe.CompteClients)
        }
        getequipe()
        
        }, [])



        const gotoclient = (id , read) =>{
            if(read === "true"){
                history.push(`/client/${id}`)
            }
        }


    return (
        <div className="row col-12 justify-content-center">
          {
              equipeclient.map((cl,index)=>(
                <div key={index} id={cl.id} className="carde d-flex mx-3 my-3 grow cursor" style={{filter: cl.Auths[0].Permission.Read === "false" ?`grayscale(90%)` : ""}}  onClick={()=> gotoclient(cl.id ,cl.Auths[0].Permission.Read )}>
                <div className="firstinfo text-center d-flex justify-content-center">
                    <Avatar src={cl.Clientimg.img_profile} style={{width:70, height:70 , zIndex:10}} className="" />
                    <div className="profileinfo">
                        <h4 style={{color :cl.Theme.Color}}>{cl.Nom_compteCli}</h4>
                        <p className="bio">{cl.description}</p>
                    </div>
                    </div>
                    {
                        cl.Auths[0].Permission.Read === "false" ? (
                            <img src={accesdenied} className="access" style={{filter:"none"}}/>
                        ) : (
                            null
                        )
                    }
                   
                 </div>
              ))
          }
    
    
        </div>
    )
}

export default Compteclientequipe
