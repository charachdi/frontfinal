import React , {useState , useEffect} from 'react'
import './../css/clientequipe.css'
import axios from 'axios'
import Api_url from './../component/Api_url'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import Loading from './../images/loading.json'
import $ from 'jquery'

function Chefscomptecli() {

    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'));


    const history = useHistory();
    const [equipes, setequipes] = useState([])
    const [comptcli, setcomptcli] = useState([])

    const [isloading, setisloading] = useState(true)

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Loading,
    };


    useEffect(async() => {

        const loading_screen = ()=>{
            setisloading(true)
            setTimeout(() => {
                setisloading(false)
            }, 1000);
    
        }

        const currentuser = await axios({
            headers: {'Authorization': `Bearer ${token}`},
            method: 'get',
            url : `${Api_url}user/${user.id}`,  
            });


        const getequipe = async() =>{
          const res = await axios({
            headers: {'Authorization': `Bearer ${token}`},
            method: 'get',
            url : `${Api_url}service/dataservicecompte/${currentuser.data.user.Chef.ServiceId}`,  
            });
            console.log(res)
            setequipes(res.data.Equipes)
            setcomptcli(res.data.Equipes[0].CompteClients)
            $(`#equipe${res.data.Equipes[0].id} .animate`).addClass("team")
        }
        getequipe()
        loading_screen()
        
        }, [])


        const changeequipe = (eq)=>{
            setisloading(true)
            setcomptcli([])
            $(`.animate`).removeClass("team")
            $(`#equipe${eq.id} .animate`).addClass("team")
            setcomptcli(eq.CompteClients)
            setTimeout(() => {
                setisloading(false)
            }, 800);
        }

        
    
    return (
        <>
        <div  className="row col-12 justify-content-center mt-3 mb-4 ">
            <div id="eq-list" className="d-inline-flex">
            {
                equipes.map((eq , index)=>(
                    <div id={"equipe"+eq.id} key={index} className="card z-depth-3 mx-2 link-two">
                        <div className="animate"></div>
                    <div key={index} className="p-2 eqname cursor" onClick={(e)=>{changeequipe(eq)}}>{eq.Nom_equipe}</div>
                    </div>
                ))
            }
              </div>  

        </div>

                    

        <div className="row col-12 justify-content-center">


        {
                        isloading ? (
                            <Lottie 
                            options={defaultOptions}
                            height={"40%"}
                            width={"50%"}
                          />
                        ) : (
                            
                                comptcli.map((cl,index)=>(
                                    <div key={index} id={cl.id} className="carde d-flex mx-3 my-3 mt-5 grow cursor equipe-cli" onClick={()=> history.push(`/client/${cl.id}`)}>
                                    <div className="firstinfo text-center d-flex justify-content-center">
                                        <Avatar src={cl.Clientimg.img_profile} style={{width:70, height:70 , zIndex:10}} className="" />
                                        <div className="profileinfo mt-3">
                                            <h6 style={{color :cl.Theme.Color}}>{cl.Nom_compteCli}</h6>
                                           
                                        </div>
                                        </div>
                                     </div>
                                  ))
                                  
                            
                        
                        
                        )
                    }


                    </div>

            </>
    )
}

export default Chefscomptecli
