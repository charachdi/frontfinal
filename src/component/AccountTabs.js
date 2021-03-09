import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import $ from 'jquery'


const gotoadd = ()=>{
  $("#user-profile").hide()
  $("#add-account").show()
  $("#profile").removeClass("picked")
  $("#addacc").addClass("picked")
}

const gotorofile = ()=>{
    $("#add-account").hide()
    $("#user-profile").show()
    $("#addacc").removeClass("picked")
    $("#profile").addClass("picked")
  
}


  


const filter = ()=>{
  
  var value = $("#user-search").val()
  $("#user-list .card").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
}

function AccountTabs() {
    return (
        <div className="row col-12 justify-content-start mb-3">
                      <div className="col-3 text-left">
                      <TextField id="user-search" onChange={filter} label="search" />
                      </div>
                      <div className="row col-9 text-center align-items-center">
                        <div id="profile" onClick={gotorofile} className="col-6 shadow picked " >Profile</div>
                        <div id="addacc" onClick={gotoadd} className="col-6 shadow ">ajouter</div>
                      </div>
            </div>
    )
}

export default AccountTabs
