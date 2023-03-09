import React from 'react'

export default function TeamInfo() {
  return (
    <div id='d0'>
      <div class="text_1">
        <h1>Team members</h1>
      </div>

      <div id='d1'>

        <div class='mem_group'>
          <img name="seungil" class = "profile_img" src= {require("../assets/Seungil.png")} width="300" height="300" alt="profile"/>
          <p class="text_name"><b>Seungil Han</b></p>
          <p>thesence01@gachon.ac.kr</p>
        </div>

        <div class='mem_group'>
          <img name="jimin" class = "profile_img" src= {require("../assets/Jimin.png")} width="300" height="300" alt="profile"/>
          <p class="text_name"><b>Jimin Lee</b></p>
          <p>reakin@gachon.ac.kr</p>
        </div>
        
        <div class='mem_group'>
        <img name="doyeon" class = "profile_img" src= {require("../assets/Doyeon.png")} width="300" height="300" alt="profile"/>
          <p class="text_name"><b>Doyeon Hyun</b></p>
          <p>118ssun@gachon.ac.kr</p>
        </div>

        <div class='mem_group'>
          <img name="bumgi" class = "profile_img" src= {require("../assets/Beomgi.png")} width="300" height="300" alt="profile"/>
          <p class="text_name"><b>Beomgi Kim</b></p>
          <p>chromato99@gachon.ac.kr</p>
        </div>

        <div class='mem_group'> 
          <img name="yejin" class = "profile_img" src= {require("../assets/Yejin.png")} width="300" height="300" alt="profile"/>
          <p class="text_name"><b>Yejin Choi</b></p>
          <p>chldppwls12@gachon.ac.kr</p>
        </div>

       

        

      </div>
     
      
      
     

    </div>

    
  )
}
