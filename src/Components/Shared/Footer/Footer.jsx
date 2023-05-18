import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
   <img src="https://i.ibb.co/jJ6BxCn/kiditos-logo-d56906d7-4313-4692-9e87-3f12e2d65e28.jpg" alt="Image not found" className='h-10' />
    <p className='font-semibold'>KIDITOS Industries Ltd.<br/>Providing reliable products since 1992</p>
  </div> 
  <div className='font-semibold'>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div className='font-semibold'>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='font-semibold'>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;