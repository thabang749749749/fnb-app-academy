import React from 'react';
import navLinks from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {

  return (
    <nav>
      <div>
        <a href='#home' className="flex items-center gap-1.5">
          <img src="/images/logo.png" alt='logo'/>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar