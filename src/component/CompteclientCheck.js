import React , { useState , useEffect} from 'react'
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios'
import Api_url from './../component/Api_url'


function CompteclientCheck({ component: Component, ...rest }) {

    
    const user =JSON.parse(localStorage.getItem('user')) ;
    // console.log(rest.computedMatch.params.id)
    const [check, setcheck] = useState("")
    const token = localStorage.getItem('token')
    var read = ""

    const getclient = async (id)=>{
        const res = await axios({
          headers: {'Authorization': `Bearer ${token}`},
          method: 'get',
          url : `${Api_url}clients/${id}`,  
          }); 
         console.log(res)

         const auths = res.data.compteCli.Auths
         auths.forEach(au => {
            if(au.UserId === user.id){
                // Permission.Read
              console.log(au.Permission.Read) 
             return au.Permission.Read
                setcheck( au.Permission.Read)
            }
       });
      }

  console.log( getclient(1).then(function(value) {
    console.log(value); // "Success"
    console.log(check)
  })   )
      
        // console.log(getclient(rest.computedMatch.params.id).then(function(value) {
        //     console.log(value.data); // "Success"
        //     value.data.compteCli.Auths.forEach(au => {
        //         if(au.UserId === user.id){
        //             // Permission.Read
                   
                  
        //         }
        //    });
        //   }) )
         
    //  console.log(getclient(rest.computedMatch.params.id))
    

      if(user === "true"){
        return (
            <Route {...rest} render={(props) => (
                  <Component {...props} /> 
              )} />
        )
    }
    else {
        return (
            <Route {...rest} render={(props) => (
                <Redirect to='/notfound' />
              )} />
        )
    }

    
    
    
}

export default CompteclientCheck
