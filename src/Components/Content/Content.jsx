import React from "react";
import "./Content.css";
const Content = () => {
  return (
    <div className="Main_content">
      <div className="Main_text">
        <div className="Main_text__left">
          <h1>
            HI,I'm Zyan!
            <br /> Creative Desinger
          </h1>
          <p>
            I'm a passionate UI/UX designer with a mission to create delightful
            and intuitive digital experiences. With a strong foundation in
            design principles and a keen eye for detail, I specialize in
            translating complex ideas into user-friendly interfaces that
            captivate and engage.
          </p>
          <div className="Down_button">
            <button className="download">
              Download Cv <i class="fa-solid fa-download"></i>
            </button>
            <div className="play">
              <i class="fa-solid fa-play"></i>
              <span>Watch The Video</span>
            </div>
          </div>
        </div>
        <div className="Main_text__rihgt">
          <img src="https://zyan.vercel.app/images/banner_img_1.png" alt="" />
            
          </div>
      </div>
    </div>
  );
};

export default Content;
