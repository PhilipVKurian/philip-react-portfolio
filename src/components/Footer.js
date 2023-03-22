import React from 'react';

function Footer() {
    return (
        <div className='footer' style={{display:"flex", flexDirection: "row", justifyContent: "center"}}>
            <a href='https://github.com/PhilipVKurian' target="_blank" rel="noopener noreferrer" ><i className="fa fa-github" style={{fontSize:"38px"}}></i></a>
            <a><i className="fa-brands fa-linkedin" style={{fontSize:"38px", marginLeft: "9px"}}></i></a>            
        </div>
    )
  }
  
  export default Footer;
  