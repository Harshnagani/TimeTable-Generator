import React from "react";
import auth from "../utils/auth";
import "../styles/homepage.scss";
import OperateManual from "./OperateManual";

class HomePage extends React.Component{
    constructor(){
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        const token = auth.getAuthToken();
        if(token){
            window.location.href = "/dashboard";
        }
    }

    render(){
        return(
            <div>
                <section className="header">
                    <div className="home-nav">
                        <div className="home-row ">
                            <h3 className="home-logo">TimeTable Generator</h3>
                            <ul className="home-menu">
                                <li className="home-menu__li"><a className="home-menu__link home-menu__link--simple" href="/user/login">Sign In</a></li>
                                <li className="home-menu__li"><a className="home-menu__link home-menu__link--btn" href="/user/signup">Join</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="home-row fw-row col-2-1-2">
                        <div className="col">
                            <div className="textbox--home">
                                <h2 className="textbox__preHeading--blue">Welcome to</h2><br/>
                                <h5 className="home-logo">TimeTable Generator</h5><br/>
                                <p>This app can be used to generate an automatically scheduled time table. Now get rid of all the manual labour of hit and trial method for generating time table</p>
                                {/* <a href="./about" className="about-btn">About</a> */}
                            </div>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </section>
                <section className="manual">
                    <div className="home-row fw-row col-2-1-2">
                        <div className="col">
                            <div className="textbox--guide">
                                <h2 className="textbox__preHeading--blue">User Guide</h2>
                                <h1 className="textbox__heading--dark">Follow the described steps</h1>
                            </div>
                    
                        </div>
                        <div className="col">
                            <OperateManual/>
                        </div>
    
                    </div>                
                </section>
            </div>
        )
    }
}

export default HomePage;