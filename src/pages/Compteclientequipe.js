import React , {useState , useEffect} from 'react'
import './../css/clientequipe.css'
import axios from 'axios'
import Api_url from './../component/Api_url'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import accesdenied from './../images/ad.png'
import $ from 'jquery'
import TextField from '@material-ui/core/TextField';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter , MDBCol, MDBFormInline , MDBIcon } from 'mdbreact';

import Badge from '@material-ui/core/Badge';

function Compteclientequipe() {

    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'));
    const [equipeclient, setequipeclient] = useState([])
    const [length, setlength] = useState(3)
    const history = useHistory();
    
    useEffect(() => {
        const getequipe = async() =>{
          const res = await axios({
            headers: {'Authorization': `Bearer ${token}`},
            method: 'get',
            url : `${Api_url}user/${user.id}`,  
            });
            setequipeclient(res.data.user.Equipe.CompteClients)  
            setlength(res.data.user.Equipe.CompteClients.length)
        }
        getequipe()
        
        }, [])



        const gotoclient = (id , read) =>{
            if(read === "true"){
                history.push(`/client/${id}`)
            }
        }


        const filter = () =>{
            var value = $("#client-search").val().toLowerCase();
        $("#clientlist #client").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            console.log($(this).text().toLowerCase())
            
  });  

}


    return (
        <div className="row col-12 justify-content-center">
                 <MDBFormInline className="md-form mb-2">
                        <MDBIcon icon="search" className="mr-1" />
                        <TextField id="client-search" onChange={filter}  label="search" variant="outlined" size='small' />
                    </MDBFormInline><br />

            {
                length === 0 ? (
                    
                    <h1>mafamma chay</h1>
                    
                ) : (
                    <div id="clientlist" className="row col-12 justify-content-start">
                       { equipeclient.map((cl,index)=>(
                           <div id="client">
                                <div key={index} id={cl.id} className="carde d-flex mx-3 my-3 grow cursor equipe-cli" style={{filter: cl.Auths[0].Permission.Read === "false" ?`grayscale(90%)` : ""}}  onClick={()=> gotoclient(cl.id ,cl.Auths[0].Permission.Read )}>
                            <span className="erro grow"><p> 252</p><span className="arrow-erro"></span></span>
                            <span className="ok grow"><p> 220</p><span className="arrow-ok"></span></span>
                            <span className="still grow"><p> 420</p><span className="arrow-still"></span></span>
                        <div className="firstinfo text-center d-flex justify-content-center">
                            <Avatar src={cl.Clientimg.img_profile} style={{width:60, height:60 , zIndex:10}} className="" />
                            <div className="profileinfo mt-3">
                                <h6 id="nom" style={{color :cl.Theme.Color}}> {cl.Nom_compteCli}</h6>
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
                           </div>
                        
                      ))}
                    </div>
                    
                      
                )
            }
          
    
    
        </div>
    )
}

export default Compteclientequipe
