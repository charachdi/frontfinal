import React , {useState , useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter , MDBCol, MDBFormInline , MDBIcon } from 'mdbreact';
import TextField from '@material-ui/core/TextField';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios'
import $ from 'jquery'
import Api_url from '../Api_url';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import Loading from '../../images/loading.json'
import ReactDatatable from '@ashvin27/react-datatable';

import Progress from '../Table/Progress'
import Colture from '../Table/Colture'
import Cours from '../../images/Cours'

function Listcompte(props) {

//    props.clients
const [loading, setloading] = useState(true)
const history = useHistory();





  useEffect(() => {
    const loading_screen = ()=>{
       
        setloading(true)
        setTimeout(() => {
          setloading(false)
        }, 800);

    }
    loading_screen()
  }, [])





  const [column, setcolumn] = useState([
    {
      key: "name",
      text: "",
      cell: (client, index) => {
        return (
          <>
              <div className="d-flex flex-row"> <Avatar src={client.Clientimg.img_profile} style={{width: 40, height : 40}} /> 
              <p className="mt-1 ml-4">{client.Nom_compteCli}</p> </div>
           </>
        );
    }
    },
    {
      key: "prog",
      text: "Progress",
      cell: (cli, index) => {
        return (
          <>
          <Progress client={cli}/>
           </>
        );
    }
    },

    {
      key: "Clôturé",
      text: "Clôturé",
      sortable: true,
      cell: (cli, index) => {
        return (
          <>
         <Colture client={cli}/>
           </>
        );
    }
    },
    {
      key: "cours",
      text: "En cours",
      sortable: true,
      cell: (cli, index) => {
        return <Cours client={cli}/>
    }
    },

    {
      key: "Requete",
      text: "Requete",
      sortable: true,
      cell: (cli, index) => {
        return (
          <>
         {cli.Requetes.length}
           </>
        );
    }
    },
    {
      key: "Action",
      text: "Action",
      cell: (cli, index) => {
        return (
          <>
             
           </>
        );
    }
    },
     
  ])
  const config = {
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: true,
    pagination: 'advance',
    button: {
        excel: false,
        print: false
    }
  }

    return (
        <>      
              <ReactDatatable
                config={config}
                records={props.clients}
                columns={column}/>
        </>
    )
}

export default Listcompte
