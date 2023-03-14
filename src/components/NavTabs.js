import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className='app__navbar'>
    <div className='app__navbar-logo'>
    <div className="navbar-brand">
      <p className="navbar-item is-size-2">
          Philip Kurian
      </p>  
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
          <a href="#about"  onClick={() => handlePageChange('About')} className="navbar-item">About</a>
          <a href="#work" onClick={() => handlePageChange('Work')} className="navbar-item">Work</a>
          <a href="#contact" onClick={() => handlePageChange('Contact')} className="navbar-item">Contact</a>
      </div>
    </div>  
    </div>
  </nav>
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <a
    //       href="#home"
    //       onClick={() => handlePageChange('Home')}
    //       //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

    //       className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Home
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#about"
    //       onClick={() => handlePageChange('About')}
    //       //  TODO: Add a comment explaining what this logic is doing

    //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#blog"
    //       onClick={() => handlePageChange('Blog')}
    //       //  TODO: Add a comment explaining what this logic is doing

    //       className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Blog
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       //  TODO: Add a comment explaining what this logic is doing

    //       onClick={() => handlePageChange('Contact')}
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
