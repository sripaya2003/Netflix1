import React, { useState } from 'react'
import './Nav1.css'
function Nav1() {
    const [show,setShow]=useState(false)
    window.addEventListener('scroll',()=>{
        if(window.scrollY>600){
            setShow(true)
        }
        else{
            setShow(false)
        }
    })
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"  width="150px"alt="logo" />
    </div>
  )
}

export default Nav1