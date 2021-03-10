import React , { useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Api_url from './../component/Api_url'
import { ToastContainer, toast } from 'react-toastify';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

function Edituser(props) {
    const token = localStorage.getItem('token') 
    const [selected, setselected] = useState(props.user)
    const [level, setlevel] = useState(selected.user_level)
    const [email, setemail] = useState(selected.user_email)
    const [pwd, setpwd] = useState("")
    const [fullname, setfullname] = useState(!selected.full_name ? "":selected.full_name)
    const [type, settype] = useState("password")

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


   const update = async (e) =>{
    e.preventDefault()
    const data = {
      email :email,
      pwd:pwd,
      level:level,
      full_name : fullname,

    }
    const res = await axios({

        headers: {'Authorization': `Bearer ${token}`},
        method: 'put',
        url : `${Api_url}user/update/profile/admin/${selected.id}`,
        data
        });

        setselected(res.data.user)
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
                onChange={(e)=>{setlevel(e.target.value)}}
              >
                <MenuItem value={"admin"}>admin</MenuItem>
                <MenuItem value={"ChefS"}>Chef Service</MenuItem>
                <MenuItem value={"ChefE"}>Chef équipe</MenuItem>
                <MenuItem value={"Collaborateur"}>Collaborateur</MenuItem>
                <MenuItem value={"RH"}>RH</MenuItem>
              </TextField>
           </div>

           <br/>
        
           <div className="row col-12 justify-content-center mt-5">
              <button type="submit" className="btn text-lowercase mr-5" style={{width:70 , fontSize:12}} onClick={(e)=>{update(e)}}>modifier</button>
              <button type="submit" className="btn-danger text-lowercase" style={{width:70 , fontSize:12}} onClick={(e)=>{handleOpen()}}>supprimer</button>
            </div>
        </div>

        </>
    )
}

export default Edituser
