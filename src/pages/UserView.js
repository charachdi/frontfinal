import React  , {useState , useEffect} from 'react'
import User from './../component/Userview'
import axios from 'axios'
import $ from 'jquery'
import Api_url from './../component/Api_url'

function UserView(props) {


    const token = localStorage.getItem('token')
    const userId = props.match.params.id
    const [user, setuser] = useState({})

        useEffect(() => {
            const getuser = async () =>{
                const res = await axios({
                    headers: {'Authorization': `Bearer ${token}`},
                    method: 'get',
                    url : `${Api_url}user/${userId}`,
                    });
                  
                   setuser(res.data.user)
              }
              getuser()
        }, [])

           
    return (
        <div className="col-12 shadow justify-content-center " style={{height:"90vh"}}>
          <User selected={user} showEdit={false}/>
       </div>
    )
}

export default UserView
