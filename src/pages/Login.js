import React , {useState , useEffect} from 'react'
import './../css/login.css'
import './../js/login.js'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {setLoginStatus} from './../redux/actions/authAction';
import apiurl from './../component/Api_url'
import { useHistory } from "react-router-dom";
import wave from './../images/wave.png'
import bg from './../images/bg.svg'
import avatar from './../images/avatar.svg'
import $ from 'jquery'
import Stepper from './Stepperview'



function Login() {

	


const history = useHistory();
const dispatch = useDispatch();
const dispatchState = (token,user) => dispatch(setLoginStatus(token, user));
const [email, setemail] = useState("")
const [pwd, setpwd] = useState("")


useEffect(() => {
const hidesidebar = ()=>{
	$('#sidebar').hide()
}

hidesidebar()
}, [])


const handellogin = (e)=>{
	e.preventDefault();
	const data={
		email : email,
		pwd : pwd
	}
	axios.post(`${apiurl}Auth/login`,data)
    .then(function (response) {
	  // handle success 
	  console.log(response) 

	  if (response.status === 200) {
        dispatchState(response.data.token,JSON.stringify(response.data.user));
		if(response.data.user.ftime === "true"){
			window.setTimeout(() => {
			history.push("/stepper")
          }, 1500);
		}else{
			window.setTimeout(() => {
			history.push("/home")
			$('#sidebar').show()
          }, 1500);
		}
       
    }
})

}


    return (
		<>
		<img className="wave" src={wave} />
		<div className="container">
			<div className="img">
				<img src={bg} />
			</div>
			<div className="login-content">
				<form action="index.html">
					<img src={avatar} />
					<h2 className="title">Welcome</h2>
					   <div className="input-div one">
						  <div className="i">
								  <i className="fas fa-user"></i>
						  </div>
						  <div className="div">
								  <h5>Email</h5>
								  <input type="text" className="input" value={email} onChange={(e)=>{setemail(e.target.value)}} />
						  </div>
					   </div>
					   <div className="input-div pass">
						  <div className="i"> 
							   <i className="fas fa-lock"></i>
						  </div>
						  <div className="div">
							   <h5>Password</h5>
							   <input type="password" className="input"  value={pwd} onChange={(e)=>{setpwd(e.target.value)}} />
					   </div>
					</div>
					
					<input type="submit" className="btn" value="Login" onClick={(e)=>{handellogin(e)} }/>
				</form>
			</div>
		</div>
		</>
    )
}

export default Login
