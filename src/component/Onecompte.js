import React , {useState , useEffect} from 'react'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import $ from 'jquery'
import Api_url from './../component/Api_url';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Onecompte(props) {

    // En attente retour client
    // Nouveau
    // En attente interne
    // En cours
    // Clôturé


    const history = useHistory();
    const token = localStorage.getItem('token')
    const [Cloture, setCloture] = useState(0)
    const [Cours, setCours] = useState(0)
    const [prog, setprog] = useState(0)

    useEffect(() => {
   const getnum = ()=>{
    // props.client.Requetes.forEach(req => {
    //     if(req.Statut === "Clôturé"){
    //             // setCours(Cours + 1)
    //             setCours(Cours++)
    //     }
        
    // });

    
    const cou = props.client.Requetes.filter(item => item.Statut !== 'Clôturé')
    const col = props.client.Requetes.filter(item => item.Statut === 'Clôturé')
    setCloture(col.length)
    setCours(cou.length)
    setprog(((col.length / props.client.Requetes.length)*100).toFixed(0))
       }

    //    props.client.Requetes.length => 100%
    //    col.length => ??

      
        // props.client.Requetes[0].Statut.forEach(element => {
           
            // <CircularProgress className="mt-2" style={{color:"#2DCD94"}} variant="determinate" value={value} />

        getnum()
    }, [])
    return (
       
            <tr key={props.key} >
                            
                            <td className="d-flex flex-row"> <Avatar src={props.client.Clientimg.img_profile} style={{width: 40, height : 40}} /> <p className="mt-1 ml-4">{props.client.Nom_compteCli}</p> </td>
                            <td> 
                            <Box position="relative" display="inline-flex">
                                <CircularProgress variant="determinate" style={{color : prog >= 80 ? '#2dcd94': '#CE1126'}} value={prog} />
                                <Box
                                    top={0}
                                    left={0}
                                    bottom={0}
                                    right={0}
                                    position="absolute"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography variant="caption" component="div" color="black">{`${prog}%`}</Typography>
                                </Box>
                                </Box>
                            </td>
                            <td>{Cloture}</td>
                            <td>{Cours}</td>
                            <td>{props.client.Requetes.length}</td>
                            <td> 
                                <IconButton size="small" aria-label="delete" color="primary" onClick={()=>{history.push(`/client/${props.client.id}`)}} style={{color :"#388e3c"}}>
                                <Visibility />
                                </IconButton>    
                            </td>
                        </tr>
                        
       
    )
}

export default Onecompte
