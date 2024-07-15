import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="mt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="footer-one d-flex justify-content-between">
            <div className="footer-bar1">
              Got a show, event, activity or a great experience? Partner with us
              & get listed on BookMyShow
            </div>
            <div>
              <Link to="/contact">
                <button type="button" className="btn btn-danger btn-sm">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row text-center footer1-bar">

          <div className="col-md-4">
            <img src="icon/headset_support_icon.png" alt="Customer support icon" />
            <p className="footer-bar3">24/7 CUSTOMER CARE</p>
          </div>
          <div className="col-md-4">
            <img src="icon/send_resend_icon.png" alt="Resend booking confirmation icon" />
            <p className="footer-bar3">RESEND BOOKING CONFIRMATION</p>
          </div>
          <div className="col-md-4">
            <img src="icon/message_icon.png" alt="Newsletter subscription icon" />
            <p className="footer-bar3">SUBSCRIBE TO THE NEWSLETTER</p>
          </div>

        </div>
        <div className="row text-center">

          <p className="footer-bar2">
            Copyright
            2024
            © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="footer-bar3">
            The content and images used on this site are copyright protected and copyrights vests
            with the respective owners. The usage of the content and images on this
            website is intended to promote the works and no endorsement of the artist shall be implied.
            Unauthorized use is prohibited and punishable by law.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
