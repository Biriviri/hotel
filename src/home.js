import './hotel.css'
import React,{useState} from 'react';
import face from './face.jpg'
import tww from './tww.jpg'
import wats from './wats.jpg'
import inst from './inst.jpg'

function Index(){
 

  return(
<body>

  <div class="navbar">
    <div class="logo">
      <h1>BIRIVIRI</h1>
    </div>
    <div class="nav-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Staff</a></li>
      <li><a href="#">Contract</a></li>
      <li><a href="#">Log in</a></li>
    </div>
  </div>

  <div class="main-haeder">
    <div class="baner-text">
      <h1><span>BIRIVIRI'S HOTEL</span></h1>
      <h2>YOUR<span>PEACEFULL</span> SLEEP IS<span>HERE</span></h2>
      <h3>WE ARE<span>ON OUR 5 STAR</span>RATING<span>BOOK ONLINE</span></h3>
    </div>
    <div class="btn">
      <button>GET A ROOM</button>
    </div>
  </div>
  <div class="popup" onclick="myFunction()">Click me!
    <span class="popuptext" id="myPopup">Popup text...</span>
  </div>

  <div class="container">
    <div class="box box1">
      <h1>our service</h1>
      <p>XIBIRIVIRANA</p>
      <div class="btn1">
        <button>Check</button>
      </div>
    </div>

    <div class="box box2">
      <div class="btn2">
        <button>get</button>
      </div>
    </div>

    <div class="box box3">
      <div class="btn3">
        <button>meals</button>
      </div>
    </div>
  </div>



  <div class="container-2">
    <div class="content">
      <h1>happy customers</h1>
      <p>XIBIRIVIRANA</p>
    </div>
  </div>


  <div class="footer">
    <div class="footer-head">
      <div class="div _1 div1">
        <h3>links</h3>
        <li><a href="#">Hotel</a></li>
        <li><a href="#">Motel</a></li>
        <li><a href="#">Resturant</a></li>
        <li><a href="#">Halls</a></li>
      </div>
      <div class="div _1 div3">
        <h3>service</h3>
        <li><a href="#">Swimming pools</a></li>
        <li><a href="#">GYM</a></li>
        <li><a href="#">Parking area</a></li>
        <li><a href="#">Disco</a></li>
      </div>
      <div class="div_1 div4">
        <h3>Social links</h3>
       
         <img class= "face" src={face}/>
         <img class= "inst" src={inst}/>
         <img class= "wats" src={wats}/>
         <img class= "tww" src={tww}/>
        
      </div>
    </div>

    <div class="contact-box">
      <h2>BOOK APPOINTMENT</h2>
      <div class="form">
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Subject"/>
      </div>
      <br/>
      <button>Submit</button>
    </div>
  </div>


  </body>
  )
}












export default home;