import ResumePDF from "../files/resume.pdf"

const Header = (props) => {
    return (
        <header className="header">

            <div className="header-item">
                <p className="header-text">Caleb Stevens</p>
            </div>
            
            <div className="header-item">
                <ul className="nav-items">
                    <li><a href="https://www.linkedin.com/in/caleb-s-0482ba139/">LinkedIn</a></li>
                    <li><a href="https://github.com/CalebJamesStevens">GitHub</a></li>
                    <li><a href={ResumePDF} download="caleb-stevens-resume">Resume</a></li>
                </ul>
            </div>

        </header>
    )
}

export default Header