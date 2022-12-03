import React from "react";
import phoneIcon from "../images/phone-solid.svg";
import "../sass/footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container f-2">
        <div className="footer-details f-2-v">
          <span>Pizza Best</span>
          <p className="adress"> Address : tanta, elgharbiea , egypt</p>
          <div className="phone f-2">
            <img src={phoneIcon} alt="phone-icone" className="icon" />
            01029949333
          </div>
        </div>
        <div className="location">
          <iframe
            title="pizza best location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109669.4072578632!2d31.14456888359376!3d30.79789530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c9020f7669d9%3A0x942e7a960fa0c77a!2sPizza%20Best!5e0!3m2!1sar!2seg!4v1670088950796!5m2!1sar!2seg"
            
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;