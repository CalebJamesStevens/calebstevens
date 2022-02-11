import ResumePDF from "../files/Caleb_Stevens_Resume.pdf";
const Footer = (props) => {
    return (
        <header className="header">
            
            <div className="header-item">
                <ul className="nav-items">
                    <li><a className="link-anim-1" href="https://www.linkedin.com/in/caleb-s-0482ba139/">LinkedIn</a></li>
                    <li><a className="link-anim-1" href="https://github.com/CalebJamesStevens">GitHub</a></li>
                    <li><a className="link-anim-1" href={ResumePDF} download="caleb-stevens-resume">Resume</a></li>
                </ul>
            </div>

        </header>
    )
}

export default Footer