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
          <a href="#work" onClick={() => handlePageChange('Project')} className="navbar-item">Work</a>
          <a href="#contact" onClick={() => handlePageChange('Contact')} className="navbar-item">Contact</a>
      </div>
    </div>  
    </div>
  </nav>
  );
}

export default NavTabs;
