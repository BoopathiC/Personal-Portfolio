import React from 'react';
import './Home.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TypingAnimation from './TypingAnimation';
import profilePhoto from './photo1.jpg'; 
const Home = () => {
  return (
    <div className="home-container">

      <header className="header">
        <section>
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <h2 id='name1'>Hello, I'm</h2><h1 id='name2'>BOOPATHI C</h1><h2 id='name3'>And I'm a <TypingAnimation words={["UI-UX Designer", "Web Developer"]} /></h2>

              
        <section className="social-media">
        <h2>Follow Me</h2>
       <ul className="social-media-icons">
  {/* <li><a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i><FacebookIcon/></a></li> */}
  <li><a href="https://www.instagram.com/thamizh.designs" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i><InstagramIcon/></a></li>
  <li><a href="https://www.twitter.com/BOOPATHI_033" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i><TwitterIcon/></a></li>
  <li><a href="https://wa.me/919025550735" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i><WhatsAppIcon/></a></li>
  <li><a href="https://www.linkedin.com/in/boopathi-c-168630258" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i><LinkedInIcon/></a></li>
  <li><a href="https://github.com/BoopathiC"><i className="fa fa-phone"></i><GitHubIcon/></a></li>
</ul>
      </section>
        </section> 
      </header><br></br>
      <section id="about" className="bio">
        <h2>About Me</h2>
        <p>
          I am a passionate and creative professional with diverse skills in design, development, and multimedia production. Here’s a brief overview of what I do:
        </p>
        <h3>1. UI/UX Designer</h3>
        <ul>
          <li>Designing intuitive and engaging user interfaces.</li>
          <li>Conducting user research to improve user experience.</li>
          <li>Creating wireframes, prototypes, and user flows.</li>
        </ul>
        <h3>2. Web Designer and Developer</h3>
        <ul>
          <li>Building responsive and visually appealing websites.</li>
          <li>Proficient in HTML, CSS, JavaScript, and React.</li>
          <li>Ensuring cross-browser compatibility and performance optimization.</li>
        </ul>
        <h3>3. Editor</h3>
        <ul>
          <li>Editing and proofreading content for clarity and accuracy.</li>
          <li>Working with writers to improve content quality.</li>
          <li>Ensuring consistency in tone and style.</li>
        </ul>
        <h3>4. Photographer and Videographer</h3>
        <ul>
          <li>Capturing high-quality images and videos.</li>
          <li>Editing photos and videos to enhance visual appeal.</li>
          <li>Creating compelling visual stories through multimedia.</li>
        </ul>
      </section> 
      <section id="portfolio" className="portfolio">
        <h2>My Projects</h2>
        <div className="project">
  <h3>Bookery Project</h3>
  <p>An e-learning website for buying and reading books.</p>
  <ul>
    <li>Book browsing and purchasing functionality.</li>
    <li>Reading books online.</li>
    <li>E-learning resources and materials.</li>
  </ul> <p><strong>Tools:</strong> HTML, CSS, Bootstrap</p>
      {/* <a href="link_to_bookery_project" target="_blank" rel="noopener noreferrer">Visit Website</a> */}
        </div>
        <div className="project">
          <h3>Art Gallery Project</h3>
          <p>A website for buying and selling art pieces with additional features.</p>
          <ul>
            <li>Artwork browsing and purchasing functionality.</li>
            <li>Artist profiles and portfolios.</li>
            <li>Secure payment gateway for transactions.</li>
            <li>User authentication and profile management.</li>
            <li>Additional features: (3d visual art gallery)</li>
          </ul>  <p><strong>Tools:</strong> React JS</p>
          <div className="screenshots">
          </div>
          {/* <a href="link_to_art_gallery_project" target="_blank" rel="noopener noreferrer">Visit Website</a> */}
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Information</h2>
        <div ><a href="mailto:cboopathipnr@gmail.com" className='mail'>Email : cboopathipnr@gmail.com</a></div><br></br>
        <div ><a href="tel:+919025550735"  className='mail'> Phone : +91 9025550735</a></div>
      </section>
      <h3 style={{color:"white",fontSize:"20px",paddingTop:"50px",paddingBottom:"50px"}}>Copyright © 2024 by Boopathi | All Rights Reserved.</h3>
    </div>
  );
};

export default Home;