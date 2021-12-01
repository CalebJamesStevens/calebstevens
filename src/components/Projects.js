
import CSSIcon from "../skill_icons/css-3.png";
import HTMLIcon from "../skill_icons/html-5.png";
import GitHubIcon from "../skill_icons/github.svg";
import JSIcon from "../skill_icons/javascript.png";
import ReactIcon from "../skill_icons/react.png";
import RORIcon from "../skill_icons/ruby_on_rails.png";
import RubyIcon from "../skill_icons/ruby.png";
import SQLIcon from "../skill_icons/sql.png";

const Projects = () => {
    return (
        <div className="projects-container">
            <div>
                <h1 className="skills-text">Skills</h1>
            </div>
            <div className="skill-icon-container">
                <img className="skill-icon" src={CSSIcon}/>
                <img className="skill-icon" src={HTMLIcon}/>
                <img className="skill-icon" src={GitHubIcon}/>
                <img className="skill-icon" src={JSIcon}/>
                <img className="skill-icon" src={ReactIcon}/>
                <img className="skill-icon" src={RORIcon}/>
                <img className="skill-icon" src={RubyIcon}/>
                <img className="skill-icon" src={SQLIcon}/>
            </div>
            <div>
                <h2 className="projects-title">Projects</h2>
                <div className="project-cards-container">
                    <div className="project-card">
                        <img className="project-card-image" src=""/>
                        <p>Description of project!</p>
                    </div>
                    <div className="project-card">
                        <img className="project-card-image" src=""/>
                        <p>Description of project!</p>
                    </div>
                    <div className="project-card">
                        <img className="project-card-image" src=""/>
                        <p>Description of project!</p>
                    </div>
                    <div className="project-card">
                        <img className="project-card-image" src=""/>
                        <p>Description of project!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects