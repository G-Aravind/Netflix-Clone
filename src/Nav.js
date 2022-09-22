import React, { useEffect, useState } from 'react'
import './images/avatar.png'
import './images/logo.png';
import './Nav.css'

const Nav = () => {

    const[show,handleShow] = useState(false)

useEffect(()=>{


    // window.addEventListener('scroll',()=>{
    //     if(window.scrollY > 100){
    //         handleShow(true);
    //     }else handleShow(false);
    // })
    // return window.removeEventListener("scroll")

 function scr(){
    window.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        })
 }

scr()
    
},[])



  return (
    <div className={`nav ${show && "nav_black"}`}>
       <img className='nav_imgLogo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
       <img className='nav_imgAvatar' src="https://i.pinimg.com/550x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg" alt="Netflix Avatar" />

    </div>
  )
}

export default Nav
