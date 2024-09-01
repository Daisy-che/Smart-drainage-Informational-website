import React, { useState } from 'react';
import './index.css';

function SmartDrainage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
      <div className="App">
       <header>
        <div className="logo">
          <img src="/images/log.png" alt="M Multimedia Logo"/>
        </div>
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#" className="active">Home</a></li>

            <li><a href="#">Product</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div>
      <div>
        <img src='/images/drainage.png'className='drainage'/>
        

      </div>
      <div className='section-text'>
      <h1 className='head-text'>Blockage Buster</h1>
      <p className='text'>say goodbye to drainage disasters with our smart solution!</p>
      <button className='btn'>Learn more</button>
      </div> 
      </div>

      <div className='aboutus'>
        <h1>About us</h1>
      </div>
      <div className='section'>
        <div>
        <img src='/images/sewerage.png'className='sewerage'/>
        </div>
        <div className='about'>
          <h3 className='mission'>Transforming estate into resilient havens with AquaSense</h3>
          <p className='vision'>With AquaSense,we empower Estate Associations to proactively manage drainage,creating cleaner,safer,and more sustainable living environments.</p>
        </div>
      </div>
      <div className='set'>
      <h1>See It In Action</h1>
      </div>
      <div className='rating'>
      <div className='trans'>
        <div>
          <img src='/images/sensor transmission.png'className='transmission'/>
        </div>
        <div className='prevention'>
          <h3 className='blockage'>98%</h3>
          <p>Blockage <br/>Prevention</p>
        </div>
      </div>
      <div className='data'>
        <div>
          <img src='/images/sensor data.png'className='sensor'/>
        </div>
        <div className='real-time'>
          <h3 className='blockage'>24/7</h3>
          <p>Real-time<br/>Alerts</p>
        </div>
      </div>
      <div>
        <div>
          <img src='/images/saver .png'className='saver'/>
        </div>
        <div className='bloc'>
          <h3 className='blockage'>100%</h3>
          <p>Satisfaction<br/>Gain</p>
        </div>
      </div>
      </div>
      <div>
        <h1 className='product'>Product</h1>
      </div>
      <div className='ourproduct'>
        <div>
          <img src='/images/drain.png'className='drain'/>
          <h4>Drainage</h4>
        </div>
        <div>
          <img src='/images/device.png'className='device'/>
          <h4>AquaSense</h4>
        </div>
        <div>
          <img src='/images/electronic box.png' className='electronic'/>
          <h4>Electronic box</h4>
        </div>
      </div>
      <div>
        <h1 className='team'>Team</h1>
      </div>
      <div className='pictures'>
      <div>
        <img src='/images/Kur.png'className='kur'/>
        <h4>Kur Achan</h4>
      </div>
      <div>
        <img src='/images/Linet.png'className='linet'/>
        <h4>Linet Mkandoe</h4>
      </div>
      <div>
        <img src='/images/Wato.png'className='wato'/>
        <h4>Wato Bucha</h4>
      </div>
      </div>
      <div className='images'>
        <div>
          <img src='/images/Nyabang.png'className='nyabang'/>
          <h4>Nyabang Wech</h4>
        </div>
        <div>
          <img src='/images/DaisyC.png'className='daisy'/>
          <h4>Daisy Chepkirui</h4>
        </div>
        <div>
          <img src='/images/Aline.png'className='aline'/>
          <h4>Aline Mutesi</h4>
        </div>
      </div>
      <div>
        <h1 className='touch'>Get In Touch</h1>
      </div>
      
      <form action>
            <input type="text" id="name" name="name" placeholder="Name" required/>
            <input type="email" id="email" name="email" placeholder="Email" required/>
            <input type="tel" id="phone" name="phone" placeholder="Phone Number" required/>
            <textarea id="message" name="message" placeholder="Message" rows="4" required></textarea>
            <button className='bt'>Submit</button>
          
        </form>
        <div>
          <h1 className='joinus'>Join Us</h1>
        </div>
        <div className='icon'>
          <div>
            <img src='/images/facebook.png' className='facebook'/>
          </div>
          <div>
            <img src='/images/twitterr.png'className='twitter'/>
          </div>
          <div>
            <img src='/images/instagra.png' className='instagram'/>
          </div>
          <div>
            <img src='/images/Linkedinn.png'className='linkedin'/>
          </div>
        </div>
        <div className='foot'>
        <div className='footer'>
          <div>
            <img src='/images/aqualogo.png'className='log'/>
          </div>
          <div>
            <h5>Support</h5>
          </div>
          <div>
            <h5>Privacy</h5>
          </div>
          <div>
            <h5>Terms</h5>
          </div>
          <div>
            <h5>Contact</h5>
            <p>+250789234657</p>
          </div>

        </div>
        <div className='footer-text'>
          <h5>@2024 Zenith.All rights reserved</h5>
        </div>
      </div>
      </div>
      
      

    );
  }
  
  export default SmartDrainage;