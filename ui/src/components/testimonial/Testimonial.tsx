import React from "react";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="title-text">
        <p>TESTIMONIALS</p>
        <h1>What Clients Says</h1>
      </div>
      <div className="testimonial-row">
        <div className="testimonial-col">
          <div className="user">
            <img src="images/salman.jpg" alt="" />

            <div className="user-info">
              <h4>
                SALMAN KHAN <i className="fa fa-twitter"></i>
              </h4>
              <small>@BeingSalmanKhan</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            in debitis pariatur, ratione placeat sunt aliquid.
          </p>
        </div>
        <div className="testimonial-col">
          <div className="user">
            <img src="images/RK.jpg" alt="" />

            <div className="user-info">
              <h4>
                RANBIR KAPOOR <i className="fa fa-twitter"></i>
              </h4>
              <small>@RANBIRKAPOOR</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            in debitis pariatur, ratione placeat sunt aliquid.
          </p>
        </div>
        <div className="testimonial-col">
          <div className="user">
            <img src="images/AK.jpg" alt="" />

            <div className="user-info">
              <h4>
                AKSHAY KUMAR <i className="fa fa-twitter"></i>
              </h4>
              <small>@akshaykumar</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            in debitis pariatur, ratione placeat sunt aliquid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
