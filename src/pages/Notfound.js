import React , {useEffect} from 'react'
import $ from 'jquery'

function Notfound() {

    useEffect(() => {
        const hidesidebar = ()=>{
            $('#sidebar').hide()
        }
        hidesidebar()
        }, [])



    return (
        <div>
            <h1>Notfound</h1>
        </div>
    )
}

export default Notfound
