import { useState } from 'react';
import './App.css';
import pro from './images/profil.png';
import vd from './images/vdreduse.png';
import pep from './images/odam.png';
import img from './images/rasm.png';
import din from './images/dinner.png';
import tel from './images/telefon.png';
import shash from './images/shashlik.png';
import quy from './images/quyosh.png'


function App() {
  const[mode, setMode] = useState(true)
  return (
    <div className="App">

<div className={mode ? 'container': 'con'}>
<button onClick={()=>setMode(!mode)} className={mode ? 'btn' : 'btn1'} >
  <img src={quy} alt="" className='imms'/>
</button>
        <div className="box">
          <img src={pro} alt="" />
        
      </div>


      <div className="container1">
        <div className={mode ? 'card' : 'car'}>
          <h1>7</h1>
          <p>years of work experiens</p>
        </div>
        <div className={mode ? 'card' : 'car'}>
         <h2> 50+</h2>
         <p>Completed projects</p>
        </div>
        <div className={mode ? 'card' : 'car'}>
          <h1>20+</h1>
          <p>satispled customers</p>
        </div>
      </div>


<div className="content">
  <div className="download">
    <h2>Download cv</h2>
  </div>
  <div className="contact">
    <h2>Contact me</h2>
  </div>
</div>


<div className="port">
  <div className="portfolio">
    <h2>Portfolio</h2>
  </div>
  <div className="skils">
    <h2>Skils</h2>
  </div>
</div>


<div className="img">
  <div className="images">
    <img src={vd} alt="" />
    <img src={pep} alt="" />
  </div>
  <div className="images">
  <img src={img} alt="" />
    <img src={din} alt="" />
  </div>
  <div className="images">
  <img src={tel} alt="" />
    <img src={shash} alt="" />
  </div>
</div>



<div className="foot">
  <img src="" alt="" />
  <p>Victor Alvarado. 2022 All rights resarved</p>
</div>

    </div>
    </div>
  );
}

export default App;
