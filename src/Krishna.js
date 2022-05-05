import React from 'react'
import Api from './KrishnaApi';
import "./krishna.css";

const Krishna = () => {
  return (
    <>
    <div className='krishna_container'>
    <div className='pranami_sam'>
        <h2>वास्तवमा प्रणामी सम्प्रदाय भनेको के हो?</h2>
        <p>प्रणामी संप्रदाय (उर्फ प्रणामी पन्थ) एक कृष्णधर्मी समुदाय हो जसले परम सत्य भगवान "श्री राज्जी महाराज र श्यामा महारानी जी (श्री राज्जी र श्यामाजी)" मा विश्वास गर्दछ।</p>
    </div>
    <div className='history'>

    <h2>History</h2>
      {Api.map((curElem)=>{
        const{id,img,text,classname,textClassname,imageClassname} = curElem;
        return(
          <>
          <div className={classname} key={id}>
          <div className={imageClassname}>
             <img src={img}alt='' />
          </div>
          <div className={textClassname}><p>{text}</p></div>
          </div>
          </>
        )
      })}

</div>   
    </div>
    </>
  )
}

export default Krishna