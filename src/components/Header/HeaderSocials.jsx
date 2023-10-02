import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {ImBehance2} from 'react-icons/im'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abdelrhman-abdelbadea-6a17531b6/"><GrLinkedin/></a>
        <a className='behance' href="https://www.behance.net/abelrhmabdelba"><ImBehance2/></a>
        <a href="https://www.facebook.com/profile.php?id=100022807777835&mibextid=ZbWKwL"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials