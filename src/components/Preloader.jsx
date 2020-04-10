import React from 'react'
import loader from '../img/loader4.gif'
let Preloader=()=>{
    return(
        <img style={{zIndex:0, position:"absolute"}} width="100px" src={loader}/>
    )
}
export default Preloader;