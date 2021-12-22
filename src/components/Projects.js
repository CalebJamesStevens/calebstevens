
import CSSIcon from "../skill_icons/css-3.png";
import HTMLIcon from "../skill_icons/html-5.png";
import GitHubIcon from "../skill_icons/github.svg";
import JSIcon from "../skill_icons/javascript.png";
import ReactIcon from "../skill_icons/react.png";
import RORIcon from "../skill_icons/ruby_on_rails.png";
import RubyIcon from "../skill_icons/ruby.png";
import SQLIcon from "../skill_icons/sql.png";
import privateEventsThumbnail from "../privateEventsThumbnail.png";
import microRedditThumbnail from "../microRedditThumbnail.png";
import cryptoAPIThumbnail from "../cryptoAPIThumbnail.png";

const Projects = () => {
    return (
        <div className="projects-container">
            <div>
                <h1 className="skills-text">Skills</h1>
            </div>
            <div className="skill-icon-container">
                <img className="skill-icon" alt="image of CSS skill badge" src={CSSIcon}/>
                <img className="skill-icon" alt="image of HTML skill badge" src={HTMLIcon}/>
                <img className="skill-icon" alt="image of Git skill badge" src={GitHubIcon}/>
                <img className="skill-icon" alt="image of JavaScript skill badge" src={JSIcon}/>
                <img className="skill-icon" alt="image of React skill badge" src={ReactIcon}/>
                <img className="skill-icon" alt="image of Rails skill badge" src={RORIcon}/>
                <img className="skill-icon" alt="image of Ruby skill badge" src={RubyIcon}/>
                <img className="skill-icon" alt="image of SQL skill badge" src={SQLIcon}/>
            </div>
            <div>
                
                <h1 className="projects-title">Projects</h1>
                <div className="project-cards-container">
                    <div className="project-card">
                        <h2>Private Events</h2>
                        <a href="https://private-events-by-caleb.herokuapp.com">
                            <img className="project-card-image" src={privateEventsThumbnail}/>
                        </a>
                        <p>
                            This project uses Ruby and Ruby on Rails with an
                            SQLite3 database. This project shows my understanding
                            of database management and frameworks along with
                            concepts such as joining data tables and HTTP request routing.
                        </p>
                    </div>
                    
                    <div className="project-card">
                        <h2>Micro-Reddit</h2>
                        <a href="https://my-micro-reddit.herokuapp.com/">
                            <img className="project-card-image" src={microRedditThumbnail}/>
                        </a>
                        
                        <p>
                            This project uses Ruby and Ruby on Rails along with preprocessors such as 
                            ERB I created a small version of 
                            reddit with an SQLite3 database. This project shows my
                            understanding of sessions, database management,
                            and elements of front-end responsive design.
                        </p>
                    </div>
                    
                    <div className="project-card">
                        <h2>Crypto Tracking API</h2>
                        <a href="https://calebjamesstevens.github.io/crypto-api/">
                            <img className="project-card-image" src={cryptoAPIThumbnail}/>
                        </a>
                        <p>
                            Built using the React framework and vanilla CSS this
                            project showcases my ability to learn and work in many
                            concepts such as hooks, state management, and
                            different frameworks along with understanding of
                            navigating a 3rd party API.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

//https://private-events-by-caleb.herokuapp.com
//https://my-micro-reddit.herokuapp.com/