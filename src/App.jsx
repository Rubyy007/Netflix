import './App.css'
import logo from "./assets/logo-removebg-preview.png"
import third from './assets/3rd.jpg'
import child from './assets/child.png'
import Footer from './Footer'
import Buttoncl from './button'
function App() {


  return (
    <>
      <div className='main'>

        <img id='logo' src={logo} alt='image error' style={{ width: "13%", position: "absolute", left: "12%", top: "1%" }} />

        <select className='select'>
          <option value="someOption">English</option>
          <option value="otherOption">Other option</option>
        </select>
        <button id='sign'>Sign in</button>
        <h1  >Unlimited movies,TV shows and more</h1>
        <h4 style={{ color: "white", position: "relative", top: "40%" }}>Watch anywhere. Cancel anytime.</h4>
        <p style={{ color: "white", position: "relative", top: "40%" }}>Ready to watch? Enter your email to create or restart your membership.</p>
        <input id='email' type='text' placeholder='Email address' required />
        <button id='get' >Get started</button>
      </div>
      <hr className='line' />
      <div className='second'>
        <div className='vdo22'>
          <h1 id='sec2'>Enjoy on your TV</h1>
          <h4 id='sec2'>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
        </div>
        <video id='vdo1' playsInline loop autoPlay muted>
          <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' type='video/mp4' />
        </video>

      </div>
      <hr className='line' />
      <div className='second'>
        <img id='vdo1' style={{ mixBlendMode: "exclusive" }} alt='image error' src={third} />
        <div className='vdo22'><h1>  Download your shows to watch offline</h1><h4>
          Save your favourites easily and always have something to watch.
        </h4></div>
      </div>
      <hr className='line' />
      <div className='second'>
        <div className='vdo22'><h1>  Watch everywhere</h1><h4>
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
        </h4></div>
        <video id='vdo1' playsInline loop autoPlay muted>
          <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' type='video/mp4' />
        </video>

      </div>
      <hr className='line' />
      <div className='second'>
        <img id='vdo1' style={{ mixBlendMode: "exclusive" }} alt='image error' src={child} />
        <div className='vdo22'><h1> Create profiles for kids</h1><h4>

          Send children on adventures with their favourite characters in a space made just for them—free with your membership.
        </h4></div>
      </div>
      <hr className='line' />

      <div className='second1'>
      <h1>Frequently Asked Questions</h1>
        <Buttoncl/>
      </div>
      <hr className='line' />

      <Footer/>
      
    </>
  )
}

export default App
