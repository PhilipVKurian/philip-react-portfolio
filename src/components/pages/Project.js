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
            <div className="card-small-flexbox" style={{display:"inline-flex"}}>
                <div className="card-small" style={{marginRight: 'auto'}}>
                    <a href="https://p2-bootcamp-forum.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://user-images.githubusercontent.com/114792819/216424896-e9d9ed50-955e-4149-a952-ccc6aa4ca8cf.png" 
                    alt="placeholder" style={{width: "300px", height: "236px"}}/> 
                    </a>
                    <p className='gradient-border'>Bootcamp Forum</p>          
                </div> 
                
                <div className="card-small" style={{marginRight: 'auto'}}>
                    <a href="https://philipvkurian.github.io/weather-prepared/" target="_blank" rel="noopener noreferrer">
                    <img src="https://user-images.githubusercontent.com/114792819/204135868-9070151e-94cd-4901-bb75-07b478d50e83.png" 
                    alt="placeholder" style={{width: "300px", height: "236px"}}/> 
                    </a>
                    <p className='gradient-border'>Weather Prepared</p>          
                </div>

                <div className="card-small" style={{marginRight: 'auto'}}>
                    <a href="https://philipvkurian.github.io/workday-scheduler/" target="_blank" rel="noopener noreferrer">
                    <img src="https://user-images.githubusercontent.com/114792819/201519202-a0dc2ebd-b06a-4e1d-bd2b-c296d7103ff9.png" 
                    alt="placeholder" style={{width: "300px", height: "236px"}}/> 
                    </a>
                    <p className='gradient-border'>Work Day Scheduler</p>          
                </div> 

                <div className="card-small" style={{marginRight: 'auto'}}>
                    <a href="https://philipvkurian.github.io/javascript-quiz/" target="_blank" rel="noopener noreferrer">
                    <img src="https://user-images.githubusercontent.com/114792819/200487753-077657d6-19c4-4e40-940f-2e948bcfea8a.png" 
                    alt="placeholder" style={{width: "300px", height: "236px"}}/> 
                    </a>
                    <p className='gradient-border'>JavaScript Quiz</p>          
                </div> 

                <div className="card-small" style={{marginRight: 'auto'}}>
                    <a href="https://philipvkurian.github.io/weather-prepared/" target="_blank" rel="noopener noreferrer">
                    <img src="https://user-images.githubusercontent.com/114792819/226948654-2a16da71-f27c-474e-bb9b-845d1f7b48b1.png" 
                    alt="placeholder" style={{width: "300px", height: "236px"}}/> 
                    </a>
                    <p className='gradient-border'>Drop Simulator</p>          
                </div> 

                <div className="card-small" style={{marginRight: 'auto'}}>
                    <a href="https://github.com/PhilipVKurian/prefessional-readme-generator" target="_blank" rel="noopener noreferrer">
                    <img src="https://user-images.githubusercontent.com/114792819/206969387-d116a476-a956-46c8-b89d-6c4d02fe4ddc.png" 
                    alt="placeholder" style={{width: "300px", height: "236px"}}/> 
                    </a>
                    <p className='gradient-border'>Professional Readme Generator</p>          
                </div>   
            </div>          
        </section>
    </article>
  );
}
