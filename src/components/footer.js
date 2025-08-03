import React from 'react'
import { Link } from 'react-router-dom';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import '../style/Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='SocialMedia'>
        <Instagram />
        <Facebook />
        <Twitter />
     
      
      </div>
      <p>&copy; 2023 Bobbastic. All rights reserved.</p>
    </div>
  )
}
export default Footer;

