import React , {useState   , useEffect} from 'react'
import Datatable from './../../component/Datatable'
function Requete(props) {
    return (
        <>
        <Datatable Requetes={props.Requetelist}/>
        </>
    )
}

export default Requete
