import React , {useState , useEffect} from 'react'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import $ from 'jquery'
import Api_url from './../../component/Api_url';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function Progress(props) {


    const [Cloture, setCloture] = useState(0)
    const [Cours, setCours] = useState(0)
    const [prog, setprog] = useState(0)

    useEffect(() => {


    const cou = props.client.Requetes.filter(item => item.Statut !== 'Clôturé')
    const col = props.client.Requetes.filter(item => item.Statut === 'Clôturé')
    setCloture(col.length)
    setCours(cou.length)
    setprog(((col.length / props.client.Requetes.length)*100).toFixed(0))


       })



    return (
       <p>{Cloture}</p>
    )
}

export default Progress
