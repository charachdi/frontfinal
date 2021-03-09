import React , {useState , useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { MDBDataTableV5 } from 'mdbreact';


function Equipe() {
    const [open, setopen] = useState(false)
    const [service, setservice] = useState("")
    const toggle = () =>{
        setopen(!open)
    }
    const [datatable, setdatatable] = useState({
      columns: [
        {
          label: 'Name',
          field: 'name',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Position',
          field: 'position',
          width: 270,
        },
        {
          label: 'Office',
          field: 'office',
          width: 200,
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Start date',
          field: 'date',
          sort: 'disabled',
          width: 150,
        },
        {
          label: 'Salary',
          field: 'salary',
          sort: 'disabled',
          width: 100,
          
        },{
          label: 'Start date',
          field: 'date',
          sort: 'disabled',
          width: 150,
          
        },
      ],
      rows: [
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          date: '2011/07/25',
          salary: '$170',
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '66',
          date: '2009/01/12',
          salary: '$86',
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          date: '2011/07/25',
          salary: '$170',
        },
      ]
    })
    return (
        
      
   
        <div className="row  justify-content-center">
            <div className="col-10 text-center">
            

    <div className="row col-12 justify-content-start mb-3 ml-2">
    <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
         onClick={()=>toggle(!open)}
      >
        Ajouter
      </Button> 
    </div>
     <Table  striped bordered hover>
        
        <thead>
        <tr>
            <th style={{width:50}}>#</th>
            <th>Equipe</th>
            <th>Service</th>
            <th style={{width:150}}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Développement</td>
            <td>
            <IconButton aria-label="delete" color="secondary">
             <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" color="primary">
             <EditIcon />
            </IconButton>     
            </td>
          </tr>







          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
            <IconButton aria-label="delete" color="secondary">
             <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" color="primary">
             <EditIcon />
            </IconButton>     
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>chaima</td>
            <td>Thornton</td>
            <td>
            <IconButton aria-label="delete" color="secondary">
             <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" color="primary">
             <EditIcon />
            </IconButton>     
            </td>
          </tr>
        </tbody>
</Table>


      <MDBModal isOpen={open} toggle={()=>toggle()} size="lg">
        <MDBModalHeader toggle={()=>toggle()} className="text-center">Ajouter une nouvelle équipe</MDBModalHeader>
        <MDBModalBody>
        <form className="row col-12 justify-content-center align-middle" >
      <div>
      <div className="mb-5">
      <TextField id="standard-basic" label="Nom de l'equipe" />
              <TextField
                className="ml-5"
                id="standard-select-currency"
                select
                size="medium"
                label="Service"
                value={service}
                onChange={(e)=>{setservice(e.target.value)}}
              >

                <MenuItem value={"admin"}>sng</MenuItem>
                <MenuItem value={"ChefS"}>Chef Service</MenuItem>
                <MenuItem value={"ChefE"}>Chef équipe</MenuItem>
                <MenuItem value={"Collaborateur"}>Collaborateur</MenuItem>
                <MenuItem value={"RH"}>RH</MenuItem>
              </TextField>

               
              </div>
              <Button variant="outlined" class="btn btn-outline-success">
              Ajouter
              </Button> 
         </div>
    </form>
        </MDBModalBody>
      </MDBModal>
      <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
    />
            </div>
        </div>
        
    )
}

export default Equipe
