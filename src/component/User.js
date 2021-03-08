import React , { useState , useEffect} from 'react'
import profile from './../images/profile.jpg'
import {Route, Switch , useRouteMatch , Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
function User({user , index}) {

    const {path,url} = useRouteMatch()



    return (
        <div   className="card shadow grow mb-2 mt-2 mr-2 ml-2" key={index} >
                   
                      <div className="card-body d-flex flex-row">
                          <div className="avatar float-left"> <Avatar style={{width:70, height:70}} alt={user.full_name} src={user.user_img} /></div>
                          <div id="user_info" className="ml-2">
                            <h4 className="text-center" style={{fontSize:13}}>{ !user.full_name ? null :user.full_name }</h4>
                            <h4 className="text-center" style={{fontSize:11}}>{user.user_email}</h4>
                            <h6 className="text-center" style={{fontSize:13}}>{user.user_level}</h6>
                          </div>
                      </div>
                     
                    </div>
    )
}

export default User
