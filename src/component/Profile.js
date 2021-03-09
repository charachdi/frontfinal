import React , { useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
function Profile(props) {
  const [selected, setselected] = useState(props.user)
    return (
        <div className="row col-12 justify-content-cneter">
            <div className="">
              
                <h4>Role : {selected.user_level}</h4>
                <h4>address : {selected.address ? selected.address : null}</h4>
                <h4>country : {selected.country ? selected.country : null}</h4>
                <h4>tel : {selected.tel ? selected.tel : null}</h4>
                <h4>fax : {selected.fax ? selected.fax : null}</h4>
                <h4>Website : {selected.Website ? selected.Website : null}</h4>
                <h4>sex :{selected.sex ? selected.sex : null}</h4>
            </div>
        </div>
    )
}

export default Profile
