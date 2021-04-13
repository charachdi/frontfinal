import React , { useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
function Profile(props) {
  const [selected, setselected] = useState(props.user)
  console.log(selected)
  const [level, setlevel] = useState(!selected.user_level ? "":selected.user_level)
    return (
        <div className="row col-12 justify-content-center mt-3">
            <div className=" col-8 text-left border-right mt-3">
                <p><i class="fas fa-envelope-open-text mr-3 mt-2" style={{color:'#2DCD94'}}></i>{selected.user_email}</p>
                <p><i class="fas fa-user-tag mr-3 mt-2" style={{color:'#2DCD94'}}></i>{level}</p>
                <p><i class="fas fa-map-marked-alt mr-3 mt-2" style={{color:'#2DCD94'}}></i> {selected.address ? selected.address : null}</p>
                <p><i class="fas fa-flag mr-3 mt-2"style={{color:'#2DCD94'}}></i>{selected.country ? selected.country : null}</p>
            
               
            </div>

            <div className=" col-4 text-left border-left mt-3">
           
              
              <p><i class="fas fa-phone-alt mr-3 mt-2 "style={{color:'#2DCD94'}}></i>{selected.tel ? selected.tel : null}</p>
              <p><i class="fas fa-fax mr-3 mt-2 "style={{color:'#2DCD94'}}></i>{selected.fax ? selected.fax : null}</p>
              <p><i class="fas fa-globe mr-3 mt-2"style={{color:'#2DCD94'}}></i>{selected.Website ? selected.Website : null}</p>
              <p><i class="fas fa-venus-mars mr-3 mt-2"style={{color:'#2DCD94'}}></i>{selected.user_sex ? selected.user_sex : null}</p>
              {
                level === "Chef Service" ? <p>Service : {selected.Chef ? selected.Chef.Service.Nom_service : null} </p> : null
              }

{
                level !== "Chef Service" ? <div className="row ml-1"><i class="fab fa-teamspeak mr-3 mt-2"style={{color:'#2DCD94'}}></i><p className="mt-1" style={{fontSize : 10}}>{selected.Equipe ? selected.Equipe.Nom_equipe + " / " : null}{selected.Equipe ? selected.Equipe.Service.Nom_service : null}</p></div> : null 
              }
              {/* <p><i class="fab fa-teamspeak mr-3 mt-2"style={{color:'#2DCD94'}}></i>{selected.Equipe ? selected.Equipe.Nom_equipe + " / " : null}{selected.Chef ? selected.Chef.Service.Nom_service : null}</p> */}
             
          </div>
        </div>
    )
}

export default Profile
