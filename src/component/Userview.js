import React , { useState , useEffect} from 'react'
import profile from './../images/profile.jpg'
import Button from '@material-ui/core/Button';
import $ from 'jquery'
import profholder from './../images/profholder.jpg'
import { Pie , Polar , Scatter , Line } from 'react-chartjs-2';
import Avatar from '@material-ui/core/Avatar';
import Profile from './../component/Profile'
import Statistique from './../component/Statistique'
import Edituser from './../component/Edituser'



function Userview(props) {

        const selected = props.selected
        const [isloading, setisloading] = useState(true)
        const [show, setshow] = useState("none")


    useEffect(() => {
        const loading_screen = ()=>{
            setshow("none")
            setisloading(true)
            setTimeout(() => {
                setisloading(false)
                setshow("block")
            }, 800);
        }
    
        loading_screen()
      }, [selected.user_email ,selected.full_name , selected.Equipe , selected.user_level])


const switchtoprofile = ()=>{
    $("#useredit").hide()
    $("#userstat").hide()
    $("#userprofile").show()  
}
const switchtostat = ()=>{
    $("#useredit").hide()
    $("#userprofile").hide()
    $("#userstat").show()
}
const switchtoedit = ()=>{
    $("#userstat").hide()
    $("#userprofile").hide()
    $("#useredit").show()
}
     
    return (
        <div id="user-profile" className="">
            {
                isloading ?(
                    <i className=" fas fa-spinner fa-spin fa-3x load"></i>
                ):(
                    <>
                    
                           
                             {/* header */}
                             
                    <div  className="d-flex justify-content-center mt-3" ><Avatar style={{width:110, height:110}} alt={selected.full_name} src={selected.user_img} /></div>  
                   <div >
                       <h5 style={{display: show}} className="text-center text-capitalize mt-3">{ !selected.full_name ? null :selected.full_name }</h5>
                       <h6 style={{display: show}} className="text-center  mt-1">{selected.user_email}</h6>
                   </div>
                       
                            <div className="row col-12 align-items-center mx-auto text-center border border-gray border-left-0 border-right-0 ">
                                        <div onClick={()=>{switchtoprofile() }} className="col-4 text-center mt-1 mb-1 inner-user" ><i className="fas fa-user-alt fa-2x"></i></div>
                                        <div onClick={()=>{switchtostat()}} className="col-4 text-center mt-1 mb-1 inner-user border border-gray border-top-0 border-bottom-0"><i className="fas fa-chart-line fa-2x"></i></div>
                                        <div onClick={()=>{switchtoedit()}} className="col-4 text-center mt-1 mb-1 inner-user "><i className="fas fa-wrench fa-2x"></i></div>
                            </div>
                       

                    <div id="user_view_body">
                    
                    
                    <div id="userprofile" >
                    <Profile user={selected}/>
                    </div>
                    <div id="userstat" style={{display:'none'}} >
                    <Statistique />
                    </div>
                    <div id="useredit" style={{display:'none'}}>
                    <Edituser user={selected} changestate={props.setstate} deleteuse={props.delete} />
                    </div>
                    
                        
                    </div>
                    </>
                      
                   
                )
            }
           
               
           
        </div> 
    )
}

export default Userview
