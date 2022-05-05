import React from 'react'
// footer
import "./footer.css"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <>
    <div className='main_container'>
    <div className='footer_container'>
        <h2>Connect with us</h2>
        <ul>
            <li><i><FontAwesomeIcon className='facebook'   icon={faFacebook }   /></i></li>
            <li><i><FontAwesomeIcon className='instagram'   icon={faInstagram }  /></i></li>
            <li><i><FontAwesomeIcon className='twitter'   icon={faTwitter }  /></i></li>
        </ul>
    </div>
    <div className='footer_copyright'>
        <p>&copy;Shri Krishna Pranami Sampraday Nepal: All rights reserved</p>
        <p className='web'>Web Adminstrator: Sworup Kc</p>

    </div>
  

 </div>
   

   
    </>
  )
}

export default Footer