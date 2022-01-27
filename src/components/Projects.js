
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
import reptlandThumbnail from "../reptland_screenshot.png";
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
                <img className="skill-icon" alt="image of JavaScript skill badge" src={JSIcon}/>
                <img className="skill-icon" alt="image of Git skill badge" src={GitHubIcon}/>
                <img className="skill-icon" alt="image of React skill badge" src={ReactIcon}/>
                <img className="skill-icon" alt="image of Rails skill badge" src={RORIcon}/>
                <img className="skill-icon" alt="image of Ruby skill badge" src={'https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg'}/>
                <img className="skill-icon" alt="image of SQL skill badge" src={SQLIcon}/>
                <img className="skill-icon" alt="image of NodeJS skill badge" src={'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'}/>
                <img className="skill-icon" alt="image of Git skill badge" src={'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'}/>
                <img className="skill-icon" alt="image of MongoDB skill badge" src={'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'}/>
            </div>
            <div>
                
                <h1 className="projects-title">Projects</h1>
                <div className="project-cards-container">
                    
                    <div className="project-card">
                        <h2>Reptland</h2>
                        <a className='project-img-link' href="https://reptland.com/">
                            <img className="project-card-image" src={reptlandThumbnail}/>
                        </a>
                        <div className="project-links"><a className='link-anim-1' href="https://github.com/CalebJamesStevens/reptland">GitHub</a> | <a className='link-anim-1' href="https://reptland.com/">Live Site</a></div>
                        <p>
                            Reptland was my favorite project to work on by far.
                            My wife and I are reptile enthusiasts and when I got
                            the idea to create a social media platform for those
                            who share our love I couldn't stop. I used the MERN stack
                            on this project. MongoDB, Express, ReactJS, and Node. I chose
                            MongoDB as my database because I wanted to experiment with noSQL and
                            it was actually really fun and inciteful. I created my own api for my
                            back end and used middleware such as PassportJS for authentication and
                            multer/AWS S3 for media uploads. The experience I gained from this project
                            was crucial to my development as a fulstack developer.
                        </p>
                    </div>

                    <div className="project-card">
                        <h2>Private Events</h2>
                        <a className='project-img-link' href="https://private-events-by-caleb.herokuapp.com">
                            <img className="project-card-image" src={privateEventsThumbnail}/>
                        </a>
                        <div className="project-links"><a className='link-anim-1' href="https://github.com/CalebJamesStevens/private-events">GitHub</a> | <a className='link-anim-1' href="https://private-events-by-caleb.herokuapp.com">Live Site</a></div>
                        <p>
                            This project uses Ruby and Ruby on Rails with an
                            SQLite3 database. This project shows my understanding
                            of database management and frameworks along with
                            concepts such as joining data tables and HTTP request routing.
                        </p>
                    </div>
                    
                    
                    <div className="project-card">
                        <h2>Crypto Tracking API</h2>
                        <a className='project-img-link' href="https://calebjamesstevens.github.io/crypto-api/">
                            <img className="project-card-image" src={cryptoAPIThumbnail}/>
                        </a>
                        <div className="project-links"><a className='link-anim-1' href="https://github.com/CalebJamesStevens/crypto-api">GitHub</a> | <a className='link-anim-1' href="https://calebjamesstevens.github.io/crypto-api/">Live Site</a></div>
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