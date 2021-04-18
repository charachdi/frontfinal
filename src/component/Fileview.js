import React , { useState , useEffect} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Lottie from 'react-lottie';
import Complete from './../images/complete.json'
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios'
import Api_url from './../component/Api_url'


function Fileview(props) {
    const token = localStorage.getItem('token')
    const [value, setvalue] = useState(0)
    const [file, setfile] = useState(props.file)
    
    useEffect(() => {
  //  console.log(props.file)
   
    }, [])

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: Complete,
      };


    const updatefile = async (data)=>{
      const res = await axios({
        headers: {'Authorization': `Bearer ${token}`},
        method: 'put',
        url : `${Api_url}Import/file/complete/${file.id}`,
        data
        });
        console.log(res)
    }

     //file %
    props.socket.on(`${props.file.Roomid}`, (data)=>{
      setvalue(data.data)
    });

    //updatefile
    props.socket.on(`${props.file.Roomid}uploadended`, (data)=>{
     

      if(data.id === file.id){
        setfile({...file , complete : 1})

        setTimeout(() => {
          props.updatecom(file)
        }, 2000);
        
      }
  });
    return (
        <div key={props.index}  className="file card mx-3 my-3 z-depth-3">
      
       <div className="d-flex flex-row ml-2 mt-3">
       <i  style={{color:"#2DCD94"}} className="far fa-file-excel fa-3x "></i>
       <p className="text-wrap" style={{fontSize:10}}>{file.Nom_file}</p>
       </div>
      
      

        {
        file.complete ? (
            <Lottie 
            options={defaultOptions}
            height={50}
            width={50}
          />
        ) : (
            <div>
            <CircularProgress className="mt-2" style={{color:"#2DCD94"}} variant="determinate" value={value} />
            <p className="prog-value">% {value}</p>
            </div>
        )
        }
       
 
       <div className="d-flex flex-row">
          <div className="dot-red mx-auto"><span className="text-wrap" style={{fontSize:10 , color:"black"}}>{file.error}</span></div>
          <div  className="dot-green mx-auto"><span className="text-wrap" style={{fontSize:10, color:"black"}}>{file.sussces}</span></div>
       </div>
       <div className="mt-4 mb-3  d-flex flex-row" >
       <a className=" mx-auto"><Avatar src={file.User.user_img} alt="aaa" style={{width:25 , height :25}} /></a><span>{file.User.full_name}</span>
       <a href={file.url_file} className=" mx-auto"><i className="fas fa-download  cursor"></i></a>
       </div>
       
        </div>
    )
}

export default Fileview
