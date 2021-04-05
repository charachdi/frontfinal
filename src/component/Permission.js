import React , {useState , useEffect} from 'react'
import './../css/permission.css'
import axios from 'axios'
import Api_url from './../component/Api_url'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import Switch from '@material-ui/core/Switch';
import accesdenied from './../images/ad.png'


function Permission(props) {

    const token = localStorage.getItem('token')
    const [clientID, setClientID] = useState(props.clientID)
    const [Auths, setAuths] = useState([])

    useEffect(() => {
        const getclient = async ()=>{
            const res = await axios({
              headers: {'Authorization': `Bearer ${token}`},
              method: 'get',
              url : `${Api_url}clients/${clientID}`,  
              }); 
              setAuths(res.data.compteCli.Auths)
              console.log(res.data.compteCli.Auths)
          }
      
          getclient()
    }, [])




    const handelchangeRead = async(id , state ) =>{
                const data = {
                    Read :"" 
                }
                if(state === "true"){
                    data.Read = "false"
                }else{
                    data.Read = "true"
                }
            const res = await axios({
                headers: {'Authorization': `Bearer ${token}`},
                method: 'put',
                url : `${Api_url}permission/Read/${id}`,  
                data
                });
             if(res.status === 200){
                 console.log(res)
                 setAuths( 
                     Auths.map(item => 
                        item.id === res.data.id
                        ? res.data 
                        : item )
                 )
             }
    }

    const handelchangewrite = async(id , state ) =>{
        const data = {
            Write :"" 
        }
        if(state === "true"){
            data.Write = "false"
        }else{
            data.Write = "true"
        }
    const res = await axios({
        headers: {'Authorization': `Bearer ${token}`},
        method: 'put',
        url : `${Api_url}permission/Write/${id}`,  
        data
        });
     if(res.status === 200){
         console.log(res)
         setAuths( 
             Auths.map(item => 
                item.id === res.data.id
                ? res.data 
                : item )
         )
     }
    }

    const handelchangeimport = async(id , state) =>{
        const data = {
            Import :"" 
        }
        if(state === "true"){
            data.Import = "false"
        }else{
            data.Import = "true"
        }
    const res = await axios({
        headers: {'Authorization': `Bearer ${token}`},
        method: 'put',
        url : `${Api_url}permission/import/${id}`,  
        data
        });
     if(res.status === 200){
         console.log(res)
         setAuths( 
             Auths.map(item => 
                item.id === res.data.id
                ? res.data 
                : item )
         )
     }
    }

    const handelchangeexport = async(id , state) =>{
        const data = {
            Export :"" 
        }
        if(state === "true"){
            data.Export = "false"
        }else{
            data.Export = "true"
        }
    const res = await axios({
        headers: {'Authorization': `Bearer ${token}`},
        method: 'put',
        url : `${Api_url}permission/export/${id}`,  
        data
        });
     if(res.status === 200){
         console.log(res)
         setAuths( 
             Auths.map(item => 
                item.id === res.data.id
                ? res.data 
                : item )
         )
     }
    }
    return (
        <div className=" row col-12 ">
            <div class="cards-container row col-12 justify-content-center">
        {
            Auths.map((auth , index)=>(
                <div class=" card card-two mr-2 ml-2 mt-3 d-inline-flex" key={index}>
                <header>
                    <div class="avatar">
                    <Avatar src={auth.User.user_img} alt={auth.User.full_name} style={{width:"100%", height:"100%" ,}} />
                    </div>
                </header>
                <h3 style={{color : auth.User.full_name === null ? "white" : ""}}>{auth.User.full_name !== null ?auth.User.full_name : "username"}</h3>
                <div class="desc">
                   
                </div>
                <div class="contacts">
                    <div className="row col-12 justify-content-between">
                        <p>Read</p>
                    <Switch
                    size="small"
                    checked={auth.Permission.Read === "true" ? true : false}
                    onChange={(event)=>{handelchangeRead(auth.Permission.id , auth.Permission.Read)}}
                    
                />
                    </div>

                    <div className="row col-12 justify-content-between">
                    <p>Write</p>
                    <Switch
                    size="small"
                     checked={auth.Permission.Write === "true" ? true : false}
                     onChange={(e)=>{handelchangewrite(auth.Permission.id , auth.Permission.Write)}}
                />
                    </div>

                    <div className="row col-12 justify-content-between">
                    <p>import</p>
                    <Switch
                    size="small"
                    checked={auth.Permission.import === "true" ? true : false}
                    onChange={(e)=>{handelchangeimport(auth.Permission.id)}}
                />
                    </div>

                    <div className="row col-12 justify-content-between">
                    <p>export</p>
                    <Switch
                    size="small"
                    checked={auth.Permission.export === "true" ? true : false}
                    onChange={(e)=>{handelchangeexport(auth.Permission.id)}}
                />
                    </div>
               

                </div>
                </div>
            ))
        } 
  

  
</div>
        </div>
    )
}

export default Permission
