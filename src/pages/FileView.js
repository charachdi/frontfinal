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

    useEffect(() => {
        const getfile = async ()=>{
            const res = await axios({
                headers: {'Authorization': `Bearer ${token}`},
                method: 'get',
                url : `${Api_url}Import/file/${fileid}`,
                });
                console.log(res)
                setfile(res.data.file)
        }



        getfile()
    }, [])
    return (
        <>
        <div className="row col-12 justify-content-center mt-2">
             <i  style={{color:"#2DCD94"}} className="far fa-file-excel fa-4x "></i>
            <h6 className="mt-3 ml-3">{file.Nom_file}</h6><a href={file.url_file} className="mt-3 ml-4"><i className="fas fa-download  cursor "></i></a>
        </div>
        <div className="row col-12 justify-content-center mt-2">
           {/* <h3>file data</h3> */}
        </div>



        <div className="row col-12 justify-content-center mt-5">
           <Datatable Requetes={file.Requetes} />
        </div>
        </>
    )
}

export default FileView
