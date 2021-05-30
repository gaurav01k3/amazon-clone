import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__links">
          <div className="footer__column">
            <h3>Get to Know Us</h3>
            <ul>
              <Link>
                <li>About Us</li>
              </Link>
              <Link>
                <li>Careers</li>
              </Link>
              <Link>
                <li>Press Releases</li>
              </Link>
              <Link>
                <li>Amazon Cares</li>
              </Link>
              <Link>
                <li>Gift a Smile</li>
              </Link>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Connect with Us</h3>
            <ul>
              <Link>
                <li>Facebook</li>
              </Link>
              <Link>
                <li>Twitter</li>
              </Link>
              <Link>
                <li>Instagram</li>
              </Link>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Make Money with Us</h3>
            <ul>
              <Link>
                <li>Sell on Amazon</li>
              </Link>
              <Link>
                <li>Sell under Amazon Accelerator</li>
              </Link>
              <Link>
                <li>Amazon Global Selling</li>
              </Link>
              <Link>
                <li>Become an Affiliate</li>
              </Link>
              <Link>
                <li>Fulfilment by Amazon</li>
              </Link>
              <Link>
                <li>Advertise Your Products</li>
              </Link>
              <Link>
                <li>Amazon Pay on Merchants</li>
              </Link>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Let Us Help You</h3>
            <ul>
              <Link>
                <li>COVID-19 and Amazon</li>
              </Link>
              <Link>
                <li>Your Account</li>
              </Link>
              <Link>
                <li>Returns Centre</li>
              </Link>
              <Link>
                <li>100% Purchase Protection</li>
              </Link>
              <Link>
                <li>Amazon App Download</li>
              </Link>
              <Link>
                <li>Amazon Assistant Download</li>
              </Link>
              <Link>
                <li>Help</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer__langs">
          <a href="/">
            <div className="footer__logo">
              <img
                src="https://storage.googleapis.com/sm-studio-temp/trace/175d2b2d-1f86-4b35-b412-06c7ae61bb7b.png?f=38f1a1f725d002a2cf0caff187bdf4e5"
                alt=""
              />
            </div>
          </a>
          <ul>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>France</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Mexico</li>
            <li>Netherlands</li>
            <li>Polands</li>
            <li>Singapore</li>
            <li>Spain</li>
            <li>Turkey</li>
            <li>Kingdom</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
      <div className="footer__servicesContainer">
        <div className="footer__services">
          <div className="footer__servicesColumn">
            <h5>AbeBooks</h5>
            <div>Books,art</div>
            <div>& collectibles</div>
          </div>
          <div className="footer__servicesColumn">
            <h5>AbeBooks</h5>
            <div>Books,art</div>
            <div>& collectibles</div>
          </div>
          <div className="footer__servicesColumn">
            <h5>AbeBooks</h5>
            <div>Books,art</div>
            <div>& collectibles</div>
          </div>
          <div className="footer__servicesColumn">
            <h5>AbeBooks</h5>
            <div>Books,art</div>
            <div>& collectibles</div>
          </div>
          <div className="footer__servicesColumn">
            <h5>AbeBooks</h5>
            <div>Books,art</div>
            <div>& collectibles</div>
          </div>
          <div className="footer__servicesColumn">
            <h5>AbeBooks</h5>
            <div>Books,art</div>
            <div>& collectibles</div>
          </div>
        </div>
      </div>
      <div className="footer__terms">
        <ul>
          <li>Conditions of Use & Sale</li>
          <li>Privacy Notice</li>
          <li>Interest-Based Ads</li>
          <li>1996-2021, Amazon.com,Inc. or its affiliates</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
