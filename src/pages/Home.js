import React from 'react'
import {Link} from 'react-router-dom'
import '../style/Home.css';
function Home() {
  return(
    <div >
      <div className='home' style={{backgroundImage: `url(${require('../assets/home-background.jpg')})`}}>
        <div className='headerContainer' >
         <h1>Welcome to Bobbastic!</h1>
          <p>Experience the best bobba tea in town</p>
          <Link to="/menu">
            <button>Check out our menu!</button>
          </Link>
        </div>
      </div>
    </div>
  )


}

export default Home;
