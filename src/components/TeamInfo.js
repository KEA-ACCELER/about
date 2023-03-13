import React from 'react'

export default function TeamInfo() {
  return (
    <div id='d0'>
      <div className="text_1">
        <h1>Team members</h1>
      </div>
      <div id='d1'>
        <div className='mem_group'>
          <img name="seungil" className="profile_img" src= {require("../assets/Seungil.png")} alt="profile"/>
          <p className="text_name"><b>Seungil Han</b></p>
          <p>thesence01@gachon.ac.kr</p>
        </div>

        <div className='mem_group'>
          <img name="jimin" className = "profile_img" src= {require("../assets/Jimin.png")}  alt="profile"/>
          <p className="text_name"><b>Jimin Lee</b></p>
          <p>reakin@gachon.ac.kr</p>
        </div>
        
        <div className='mem_group'>
        <img name="doyeon" className = "profile_img" src= {require("../assets/Doyeon.png")} alt="profile"/>
          <p className="text_name"><b>Doyeon Hyun</b></p>
          <p>118ssun@gachon.ac.kr</p>
        </div>

        <div className='mem_group'>
          <img name="bumgi" className = "profile_img" src= {require("../assets/Beomgi.png")} alt="profile"/>
          <p className="text_name"><b>Beomgi Kim</b></p>
          <p>chromato99@gachon.ac.kr</p>
        </div>

        <div className='mem_group'> 
          <img name="yejin" className = "profile_img" src= {require("../assets/Yejin.png")} alt="profile"/>
          <p className="text_name"><b>Yejin Choi</b></p>
          <p>chldppwls12@gachon.ac.kr</p>
        </div>
      </div>
    </div>
  )
}
