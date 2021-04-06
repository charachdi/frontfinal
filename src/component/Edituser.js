import React , { useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Api_url from './../component/Api_url'
import { ToastContainer, toast } from 'react-toastify';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import home from './../pages/Home'

function Edituser(props) {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token') 
    const [selected, setselected] = useState(props.user)
    const [level, setlevel] = useState(selected.user_level)
    const [email, setemail] = useState(selected.user_email)
    const [pwd, setpwd] = useState("")
    const [fullname, setfullname] = useState(!selected.full_name ? "":selected.full_name)
    const [type, settype] = useState("password")
    const [usereq, setusereq] = useState(!selected.Equipe ? "" :selected.Equipe.id)
    const [equipes, setequipes] = useState([])
    const [services, setservices] = useState([])

    const [diasbled, setdiasbled] = useState(false)
    const [service, setservice] = useState(selected.Chef ? selected.Chef.ServiceId : "")
    
console.log(selected)

  useEffect(() => {

    const getequipelist = async () =>{
      const res = await axios({
        headers: {'Authorization': `Bearer ${token}`},
        method: 'get',
        url : `${Api_url}equipe/`,  
        });
        const seviceres = await axios({
          headers: {'Authorization': `Bearer ${token}`},
          method: 'get',
          url : `${Api_url}service/`,  
          });
          
        setservices(seviceres.data)
        setequipes(res.data)

        if(level === "Chef Service"){
          setdiasbled(true)
        }else{
          setdiasbled(false)
        }
    }

    

    const getdata = async() =>{
     
      //get the current user 
            const currentuser = await axios({
              headers: {'Authorization': `Bearer ${token}`},
              method: 'get',
              url : `${Api_url}user/${user.id}`,  
              });
              console.log()
            
          if(currentuser.data.user.user_level === "Chef Service"){
            
            const res = await axios({
              headers: {'Authorization': `Bearer ${token}`},
              method: 'get',
              url : `${Api_url}service/dataservice/${currentuser.data.user.Chef.ServiceId}`,  
              });
              console.log(res)
              
        setequipes(res.data.equipes)
              
          }
          else{
            getequipelist()
          }
      
         
          }
          getdata()
  }, [])
    const [open, setOpen] = useState(false);
   
    const handleOpen = () => {
        setOpen(true);
     
      };
    
      const handleClose = () => {
        setOpen(false);
      };

//handel update user
   const update = async (e) =>{
    e.preventDefault()
    const data = {
      email :email,
      pwd:pwd,
      level:level,
      full_name : fullname,
      equipe_id : usereq , 
      ServiceId :service
    }
    const res = await axios({

        headers: {'Authorization': `Bearer ${token}`},
        method: 'put',
        url : `${Api_url}user/update/profile/admin/${selected.id}`,
        data
        });
        
        props.changestate(res.data.updateduser)
        if(res.status === 200 ){
            toast.success(`user updated`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
        })
    }
    
   }


   const deleteUs = async (e) =>{
    e.preventDefault()
    const res = await axios({
      headers: {'Authorization': `Bearer ${token}`},
      method: 'delete',
      url : `${Api_url}user/user/${selected.id}`,
      });
      console.log(res)
      if(res.status === 200 ){
        toast.success(`${selected.user_email} supprimer`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
    })

    props.deleteuse(res.data.user)
}
   }


    return (


<>

<ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />

   
  

        <div className=" col-12 justify-content-center text-center  mt-4" >
            
            <div className="mt-5 mb-3 ">
           <TextField className="mr-2 col-5" variant="outlined" id="fullname" label="fullname" type="text" value={fullname} onChange={(e)=>{setfullname(e.target.value)}}/>
           <TextField className="ml-2 col-5" variant="outlined" id="email" label="email" type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
           </div>
           <div className="mt-5">
           <TextField className="mr-2 col-5" variant="outlined" id="password" label="password"  type="password" value={pwd} onChange={(e)=>{setpwd(e.target.value)}}/>
           <TextField
                className="ml-2 col-5"
                variant="outlined"
                id="standard-select-currency"
                select
                size="medium"
                label="Role"
                helperText="select Role"
                value={level}
                onChange={(e)=>{setlevel(e.target.value); if(e.target.value==="Chef Service"){setdiasbled(true)}else{setdiasbled(false)}}}
              >
                {
                  level === "Chef Service" ?  <MenuItem value={"Chef Service"}>Chef Service</MenuItem> : null
                }
                {
                  level === "admin" ?  <MenuItem value={"admin"}>admin</MenuItem> : null
                }
                {
                  level === "Chef equipe" ?  <MenuItem value={"Chef equipe"}>Chef équipe</MenuItem> : null
                }
                {
                  level === "Chef equipe" ?  <MenuItem value={"Collaborateur"}>Collaborateur</MenuItem> : null
                }

                {
                  level === "Collaborateur" ?  <MenuItem value={"Chef equipe"}>Chef équipe</MenuItem> : null
                }
                {
                  level === "Collaborateur" ?  <MenuItem value={"Collaborateur"}>Collaborateur</MenuItem> : null
                }
                {/* {
                  level !== "Chef Service" ?  <MenuItem value={"RH"}>RH</MenuItem> : null
                } */}
                
               
              </TextField>

                {
                  diasbled ? (
                    <TextField
                className="float-center mt-2 col-4"
                id="service"
                select
                size="medium"
                label="service"
                helperText="select service"
                value={service}
                onChange={(e)=>{setservice(e.target.value)}}
              >
                {
                  services.map((ser , index) =>(
                    <MenuItem key={index} value={ser.id}>{ser.Nom_service}</MenuItem>
                  ))
                }
               
                
              </TextField>
                  ) :(

                    level !== "admin" ? (
                      <TextField
                    className="float-center mt-2 col-4"
                    id="equipe"
                    select
                    size="medium"
                    label="equipe"
                    helperText="select equipe"
                    value={usereq}
                    onChange={(e)=>{setusereq(e.target.value)}}
                  >
                    {
                      equipes.map((equ , index) =>(
                        <MenuItem key={index} value={equ.id}>{equ.Nom_equipe}</MenuItem>
                      ))
                    }
                   
                    
                  </TextField>
                    ):null
                    
                  )
                }
              
            


              
           </div>

           <br/>
        
           <div className="row col-12 justify-content-center mt-1">
              <button type="submit" className="btn text-lowercase mr-5" style={{width:70 , fontSize:12 ,display: selected.id === ""  ? "none" : "block"}} onClick={(e)=>{update(e)}}>modifier</button>
              <button type="submit" className="btn-danger text-lowercase" style={{width:70 , fontSize:12 ,display: selected.id === ""  ? "none" : "block"}} onClick={(e)=>{deleteUs(e)}}>supprimer</button>
            </div>
        </div>

        </>
    )
}

export default Edituser
