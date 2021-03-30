import React , {useState , useEffect} from 'react'
import './../css/clientequipe.css'
import axios from 'axios'
import Api_url from './../component/Api_url'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import accesdenied from './../images/ad.png'

function Permission(props) {


    const [clientID, setClientID] = useState(props.clientID)
    return (
        <div className=" row col-12 justify-content-center">
            <h1 className="col-12">Permission     {clientID}</h1> <br />

            <div  className="card shadow grow mr-2 ml-2 mt-2 mb-4" style={{width:150 , height:175}} >

                <div className="card-header justufy-content-center">
                <Avatar className="ml-2" style={{width:90, height:90}}  src={""} />
                            <div className="text-center mt-2">{"haboubi"}</div>
                            <span className="text-center mt-1 small">{"admin"}</span>
                </div>
                    <div className="card-body ">
                        
                       <h1></h1>
                       
                    </div>             
            </div>


        </div>
    )
}

export default Permission
