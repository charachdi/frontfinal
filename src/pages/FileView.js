import React , {useState , useEffect} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import $ from 'jquery'
import Api_url from './../component/Api_url'
import Datatable from './../component/Datatable'

function FileView(props) {


    const token = localStorage.getItem('token')
    const history = useHistory();
    const [fileid, setfileid] = useState(props.match.params.id)
    const [file, setfile] = useState({})

    
    const [Cloture, setCloture] = useState(0)
    const [Cours, setCours] = useState(0)
    

   


    useEffect(() => {
        const getfile = async ()=>{
            const res = await axios({
                headers: {'Authorization': `Bearer ${token}`},
                method: 'get',
                url : `${Api_url}Import/file/${fileid}`,
                });
                console.log(res)
                setfile(res.data.file)
                    const cou = res.data.file.Requetes.filter(item => item.Statut !== 'Clôturé')
                    const col = res.data.file.Requetes.filter(item => item.Statut === 'Clôturé')
                    setCloture(col.length)
                    setCours(cou.length)
                   
        }

     


        getfile()
    }, [])
    return (
        <>
        <div className="row justify-content-center mt-2" >
             <i  style={{color:"#2DCD94"}} className="far fa-file-excel fa-4x "></i>
            <h6 className="mt-3 ml-3">{file.Nom_file}</h6><a href={file.url_file} className="mt-3 ml-4"><i className="fas fa-download  cursor "></i></a>
        </div>
        <div className="row col-12 justify-content-center mt-5 ">
                    
                    <div className="z-depth-3 grow col-3 mx-3 d-flex flex-row justify-content-center" style={{minHeight:40}}><span className="mt-2 ">Clôturé <i class="fas fa-check-circle  mx-3" style={{color:"green"}}></i> {Cloture}</span></div>
                    <div className="z-depth-3 grow col-3 mx-3 d-flex flex-row justify-content-center" style={{minHeight:40}}><span className="mt-2 ">En cours <i class="fas fa-spinner  mx-3" style={{color : "#f2df32"}}></i> {Cours}</span></div>

                   
                    {/* <div className="card col-3 mx-2">z</div> */}
        </div>



        <div className="row  justify-content-center mt-5">
           <Datatable Requetes={file.Requetes} />
        </div>
        </>
    )
}

export default FileView
