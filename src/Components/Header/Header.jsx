import React from "react";
import "./Header.css";
import { Button, Offcanvas } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="Main_div">
      <div className="image">
        <img
          src="https://zyan.vercel.app/images/logo.png"
          style={{ width: 225 }}
          alt=""
        />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                Home
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Home 1</a>
                <a href="#">Home 2</a>
                <a href="#">Home 3</a>
                <a href="#">Home 3</a>
                <a href="#">Home RTL</a>
              </div>
            </div>{" "}
          </li>
          <li>About Us</li>
          <li>Services</li>
          <li>Projets</li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                Blog
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Blog List</a>
                <a href="#">Blog Details</a>
              </div>
            </div>{" "}
          </li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <Button className="Button_offcanvas" onClick={handleShow}>
          <i className="fa-solid fa-bars"></i>
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header className="offcanvas-header-custom">
            <Offcanvas.Title>
              <img src="https://zyan.vercel.app/images/logo2.png" alt="" />
            </Offcanvas.Title>
            <Button className="button_close" onClick={handleClose}>
              <i class="fa-solid fa-x"></i>
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas_body">
            <div className="offcanvas_about">
              <h2>ABOUT US</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quas, autem id molestiae facere assumenda fuga cupiditate illo
                quasi animi?
              </p>
            </div>
            <div className="offcanvas_form">
              <h2>GET IN TOUCH</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="message"></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="Submit">Submit</button>
              </form>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Header;

