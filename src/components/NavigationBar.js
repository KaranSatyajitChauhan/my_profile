import { useState,useEffect } from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';

export const NavBar =()=>{
const [activeLink, setActiveLink] = useState("home");
const [scroll, setScroll] = useState("false");
var scrolled;

useEffect(()=>{
const onScroll = ()=>{
  if(window.scrollY>50){
    setScroll(true);
  }else{
    setScroll(false);
  }
}
window.addEventListener("scroll",onScroll);
return () => window.removeEventListener("scroll",onScroll);
},[])

const onUpdateActiveLink =(link)=>{
  setActiveLink(link);
  }

  return (
        <>
        <Navbar expand="lg" className={scrolled ? "scrolled":"" }>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt="Logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link' : 'navbar-link'} onclick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#aboutMe" className={activeLink==='aboutMe'?'active navbar-link' : 'navbar-link'}onclick={()=> onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
            <Nav.Link href="#skills"className={activeLink==='skills'?'active navbar-link' : 'navbar-link'}onclick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink==='projects'?'active navbar-link' : 'navbar-link'}onclick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
            <a href='#LinkIn'><img src={''} alt="LinkedIn"/></a>
            <a href='#Github'><img src={''} alt="Github"/></a>
            <a href='#website'><img src={''} alt="Website"/></a>
            </div>
          </span>
          <button className='vvd' onclick={()=>console.log("contact us")}>Let's connect</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}