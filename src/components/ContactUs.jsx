import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <section className="footer_get_touch_outer">
      <div className="container">
        <div className="footer_get_touch_inner grid-70-30">
          <div className="colmun-70 get_form">
            <div className="get_form_inner">
              <div className="get_form_inner_text">
                <h3>Get In Touch</h3>
              </div>
              <form action="#">
                <div className="grid-50-50">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="email" placeholder="Email" />
                  <input type="tel" placeholder="Phone/Skype" />
                </div>
                <div className="grid-full">
                  <textarea placeholder="About Your Project" cols="30" rows="10"></textarea>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
          <div className="colmun-30 get_say_form">
            <h5>Say Hi!</h5>
            <ul className="get_say_info_sec">
              <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:info@stackfindover.com">info@stackfindover.com</a>
              </li>
              <li>
                <i className="fa fa-whatsapp"></i>
                <a href="tel:+919602381997">+91 9602381997</a>
              </li>
              <li>
                <i className="fa fa-skype"></i>
                <a href="#">Stackfindover</a>
              </li>
            </ul>
            <ul className="get_say_social-icn">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
