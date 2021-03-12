import React , { useState , useEffect} from 'react'
import axios from 'axios'
import $ from 'jquery'
import Api_url from './../component/Api_url'

function EquipeView(props) {

    const token = localStorage.getItem('token')
    const [equipe_id, setequipe_id] = useState(props.match.params.id)
    const [chefE, setchefE] = useState([])
    const [collab, setcollab] = useState([])
    const [equipe, setequipe] = useState({})


    useEffect(() => {
      const getequipe = async () =>{
        const res = await axios({
            headers: {'Authorization': `Bearer ${token}`},
            method: 'get',
            url : `${Api_url}equipe/${equipe_id}`,
            });
             setequipe(res.data.equipe)
            //  user_level
            res.data.equipe.Users.forEach(user => {
                
                if(user.user_level === "Chef equipe"){
                        chefE.push(user)
                }else if (user.user_level === "Collaborateur"){
                        collab.push(user)
                }
            });
console.log(chefE)
console.log(collab)  
            
      }

      getequipe()
    }, [])
    return (
        <div>
            EquipeView{equipe_id}
        </div>
    )
}

export default EquipeView
