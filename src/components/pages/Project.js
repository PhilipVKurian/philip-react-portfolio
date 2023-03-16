import React from 'react';
import './About.css';
import './Project.css';

export default function Project() {
  return (
    <article className="article" id="work">
        <aside className="heading">
            <h1>Work</h1>
        </aside>
        <section className="content">
            <div className="card-large">
                <a href="https://philipvkurian.github.io/PhilipVKurian-module-1-challenge/">
                    <img src="https://user-images.githubusercontent.com/114792819/196053720-ee51eb1d-e89e-446e-9f74-340ed8dfad39.png" alt="website optimized" />
                </a>
                <p id="card-large-text">HTML/CSS Code Refactor</p>   
            </div>  
            <div className="card-small-flexbox" style={{display:"inline-flex"}}>
                <div className="card-small">
                    <a href="https://p2-bootcamp-forum.herokuapp.com/">
                    <img src="https://user-images.githubusercontent.com/114792819/216424896-e9d9ed50-955e-4149-a952-ccc6aa4ca8cf.png" 
                    alt="placeholder image" style={{width: "300px", height: "236px"}}/> 
                    </a>
                    <p>Bootcamp Forum</p>          
                </div> 
                
                <div className="card-small" style={{marginRight: 'auto'}}>
                    <a href="https://philipvkurian.github.io/weather-prepared/">
                    <img src="https://user-images.githubusercontent.com/114792819/204135868-9070151e-94cd-4901-bb75-07b478d50e83.png" 
                    alt="placeholder image" style={{width: "300px", height: "236px"}}/> 
                    </a>
                    <p>Weather Prepared</p>          
                </div>  
            </div>          
        </section>
    </article>
  );
}
