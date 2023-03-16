import React from 'react';
import './About.css';

export default function About() {
  return (
  <article className="article" id="about">
    <aside className="heading">
        <h1>About</h1>
    </aside>
    <section className="content">
        <p>I'm an aspiring web developer with many ideas. I've been facinated by computers and how they work since I was a young and this has led me to pursue a career in web development.</p>
        <h2>Interests:</h2>
        <ul>
            <li>Working hard on innovative ideas.</li>
            <li>I enjoy working with others and learning new/efficient ways of performing tasks.</li>
            <li>I'm passionate about font-end development.</li>
        </ul>   
        <h2>My skills include:</h2>
        <ul>
            <li>HTML & CSS</li>
            <li>JavaScript, Jquery, Node.js: Object Oriented Programming, MVC web applications.</li>
            <li>Database design using mySQL and Sequelize for ORM.</li>
            <li>Java and Python programming</li>                    
        </ul>
        <p>I am constantly learning as i move forward with my journey! This portfolio site will showcase my upcoming and completed projects</p>
    </section>
  </article>  
  );
}
