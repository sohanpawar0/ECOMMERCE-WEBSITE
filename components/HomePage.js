import React from "react";
import './Home.css'

const HomePage = () => {
    return (
       
            <div className="home">
                <h1>The Generics</h1>
                
                <p className="heading">Get Our New Album Here</p>

                <div className="tours">
                    <div className="tickets">
                        <h6>16th July </h6>
                        <p>DETROIT, MI</p>
                        <p>DTE ENERGY MUSIC THEATRE</p>
                        <button id="btn">Buy Tickets</button>
                    </div>
                    <div className="tickets">
                        <h6>JUL19</h6>
                        <p>TORONTO,ON</p>
                        <p>BUDWEISER STAGE</p>
                        <button id="btn">Buy Tickets</button>
                    </div>
                    <div className="tickets">
                        <h6>JUL 22

                        </h6>
                        <p>BRISTOW, VA</p>
                        <p>JIGGY LUBE LIVE</p>
                        <button id="btn">Buy Tickets</button>
                    </div>
                    <div className="tickets">
                        <h6>JUL 29

                        </h6>
                        <p>PHOENIX, AZ</p>
                        <p>AK-CHIN PAVILION</p>
                        <button id="btn">Buy Tickets</button>
                    </div>
                    <div className="tickets">
                        <h6>AUG 2

                        </h6>
                        <p>LAS VEGAS, NV</p>
                        <p>T-MOBILE ARENA</p>
                        <button id="btn">Buy Tickets</button>
                    </div>
                    <div className="tickets">
                        <h6>AUG 7

                        </h6>
                        <p>CONCORD, CA</p>
                        <p>CONCORD PAVILION</p>
                        <button id="btn">Buy Tickets</button>
                    </div>

                </div>
            </div>
        
    )
}

export default HomePage;
