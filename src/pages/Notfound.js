import React , {useEffect} from 'react'
import $ from 'jquery'
import Lottie from 'react-lottie';
import Notfoundanimation from './../images/404.json'
function Notfound() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Notfoundanimation,
      };

    useEffect(() => {
        
        }, [])



    return (
        <div>
             <Lottie 
	    options={defaultOptions}
        height={"100%"}
        width={"100%"}
      />
        </div>
    )
}

export default Notfound
