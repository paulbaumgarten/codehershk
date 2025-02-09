import React from 'react'

import AnimatedText from './AnimatedText'

import instagramIcon from '@/imgs/icons/instagram.svg'
import linkedinIcon from '@/imgs/icons/linkedin.svg'
import emailIcon from '@/imgs/icons/email.svg'

interface imageProp {
  src: string;
}

interface socialsProp {
  icon: imageProp;
  link: string;
}

function Footer() {
  const socials: socialsProp[] = [
    {icon: instagramIcon, link: 'https://instagram.com/codehershk/'},
    {icon: linkedinIcon, link: 'https://instagram.com/codehershk/'},
    {icon: emailIcon, link: 'mailto:codehershk@gmail.com'}
  ]

  return (
	  <footer id='footer'>
      <div>
        <AnimatedText type='letterByLetter'>CODE</AnimatedText>
        <AnimatedText type='letterByLetter'>HERS</AnimatedText>
        <a href="https://maps.app.goo.gl/xLFtz7FrKnbUbaYKA" target="_blank">Victoria Shanghai Academy, 19 Shum Wan Road, Aberdeen, Hong Kong</a>
      </div>
      <div className="verticalLine"/>
      <div>
        <div className="socials">
          {
            socials.map((item, index) => {
              return <a className="socialsItem" key={index} href={item.link}>
                      <img src={item.icon.src} width='25px' height='25px'/>
                    </a>
            })
          }
        </div>
        <p>Made with ❤ by <b><a href="https://github.com/realhuman101" target="_blank">Valentina Banner</a></b></p>
      </div>
    </footer>
  )
}

export default Footer