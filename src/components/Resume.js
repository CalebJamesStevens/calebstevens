import ResumeIcon from "../resume-icon.png";
import ResumePDF from "../files/resume.pdf"
const Resume = () => {
    const mouseOver = () => {
        console.log("Mouse over")
    }
    return (
        <div className="resume-container">
            <div className="resume-icon">
                <a href={ResumePDF}><img src={ResumeIcon}/></a>
            </div>
            <a onMouseOver={mouseOver} href={ResumePDF} download="caleb-stevens-resume"><h2>Click To Download Resume</h2></a>
        </div>
    )
}

export default Resume