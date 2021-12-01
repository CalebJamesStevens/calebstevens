import emailjs from "emailjs-com";

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vvh897p', 'template_sbzz0hi', e.target, 'user_Lhl3BMh3mj6j9YOmpYStX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-info-container">
                <div>Contact me</div>
                <div>Email: <a href="calebjamesstevens219@gmail.com">calebjamesstevens219@gmail.com</a></div>
            </div>
            <div className="contact-form-container">
                <form onSubmit={sendEmail} className="contact-form">

                    <div className="form-control">
                        <label>Name</label><br/>
                        <input type="text" name="name" className="form-input"/>
                    </div>

                    <div className="form-control">
                        <label>Email</label><br/>
                        <input type="email" name="user_email" className="form-input"/>
                    </div>

                    <div className="form-control">
                        <label>Message</label><br/>
                        <textarea type="text" name="message" cols="100" rows="20" className="form-input"/>
                    </div>

                    <div className="form-control">
                        <input type="submit" value="Contact Me!"/>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Contact