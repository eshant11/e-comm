import { Location, Call, Mail } from "react-ionicons";

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          animi eius aut facilis labore est modi.
        </p>
      </div>
      <div className="contact-container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <Location color={"#00000"} height="25px" width="25px" />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                4671,khandwa Road, <br />
                Indore,(M.P.)
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <Call color={"#00000"} height="25px" width="25px" />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+91 7999843495</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <Mail color={"#00000"} height="25px" width="25px" />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>eshantmishra33@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form action="">
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required />
              <span>Type Your Message...</span>
            </div>

            <div className="inputBox">
              <input type="submit" name="" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
