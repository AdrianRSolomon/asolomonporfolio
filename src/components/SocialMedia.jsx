import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/adrian-solomon-8b3624219/">
      <FaLinkedinIn />
    </a>
    <div>
      <a href="https://www.facebook.com/adrianrandysolomon/">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/adrianrsolomon/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
