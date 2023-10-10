import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">
            <div className="slider-item">
              <img
                src="./Images/banner1.jpeg"
                alt="women's latest fashion sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending item</p>

                <h2 className="banner-title">Our Beloved Items</h2>

                <p className="banner-text">
                  starting at &#8377; <b>20</b>.00
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="./Images/banner2.jpeg"
                alt="modern sunglasses"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending accessories</p>

                <h2 className="banner-title">Modern sunglasses</h2>

                <p className="banner-text">
                  starting at &#8377; <b>15</b>.00
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="./Images/banner1.jpeg"
                alt="new fashion summer sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Sale Offer</p>

                <h2 className="banner-title">New fashion summer sale</h2>

                <p className="banner-text">
                  starting at &#8377; <b>29</b>.99
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
