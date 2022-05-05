import React,{useState} from 'react';
import "./header.css"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    const[toggle, setToggle] = useState(false);

    const Bars = () =>{
        setToggle(true);
        console.log('clicked');
        const bars_icon = document.getElementById('bars');
        const cross_icon = document.getElementById('cross');
        
        if(bars_icon.style.display = 'flex'){
            bars_icon.style.display = 'none';
            cross_icon.style.display = 'flex';
        }else {
            bars_icon.style.display = 'flex';
        }
    }

    const Times = () =>{
        setToggle(false);
        console.log('clicked again');

        const bars_icon = document.getElementById('bars');
        const cross_icon = document.getElementById('cross');
        
        if(cross_icon.style.display = 'flex'){
            cross_icon.style.display = 'none';
            bars_icon.style.display = 'flex';
        }else {
            cross_icon.style.display = 'flex';
        }
    }



  return (
  <>
  <nav className='Header'>
  <img src="https://wallpapers.oneindia.com/ph-1024x768/2013/11/shree-krishna-wallpaper_138536341820.jpg" className='logoimg' alt='' />
  <div className={toggle ? 'NavMenu active' : 'NavMenu'}>
    <a href='/'>
        <span>Home</span>
    </a>
    <a href='/About'>
        <span>About</span>
    </a>
    <a>
        <span>Books</span>
    </a>
  </div>

    <div className="menu-btn">
    <i onClick={ ()=>Bars()} id="bars" className='bars-icon' ><FontAwesomeIcon   icon={faBars }  /></i>
    <i onClick={()=>Times()} id="cross" className='cross-icon'><FontAwesomeIcon    icon={faTimes } /></i>
    </div>

  </nav>
  </>
  )
}

export default Header