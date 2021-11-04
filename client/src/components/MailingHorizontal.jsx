import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import userService from "../services/UserService";
const MailingHorizontal = (props) => {
  const [email, SetEmail] = React.useState("");
  const [password, SetPassword] = React.useState("");
  const [firstName, SetFirstName] = React.useState("");
  const [lastName, SetLastName] = React.useState("");

  return (
    <div>
      <h3 className="upload-card-heading">Mail </h3>
      <section className="upload-photo-sec">
        <div className="blank-card-horizontal"></div>

        <div style={{ marginTop: "16rem" }} className="upload-photo-card">
          <div className="upload-photo-card-heading">
            <h3>MAILING OPTIONS</h3>
          </div>
          <img src="../../svgIcons/icon_truck.svg" alt="" />
          <p>
            We can send the cards to you, or we can stamp, address and mail the cards directly to
            everyone for you.
          </p>
          <div className="card-column-mail">
            <div className="check-box-mail">
              <input type="radio" id="blank" name="blank" value="blank" />
              <p>Mail them to everyone for me</p>
            </div>
            <div className="check-box-mail">
              <input type="radio" id="blank" name="blank" value="blank" />
              <p>Send them to me in a box</p>
            </div>
          </div>
          <Link to="" style={{ width: "90%" }}>
            <button style={{ width: "90%", marginBottom: "1rem" }} className="btn-customize">
              Continue
            </button>
          </Link>
        </div>

        {/* <div className="container-auth">
            <section style={{ height: "90vh" }} className="auth-section">
              <h3>Create a free account</h3>
              <p>Sign up now and get your first card for $1</p>
              <div className="auth-inputs">
                <input
                  type="text"
                  placeholder=" First Name"
                  value={firstName}
                  onChange={(e) => {
                    SetFirstName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder=" Last Name"
                  value={lastName}
                  onChange={(e) => {
                    SetLastName(e.target.value);
                  }}
                />
                <input
                  type="email"
                  placeholder=" Email Address"
                  value={email}
                  onChange={(e) => {
                    SetEmail(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder=" Create a Password"
                  value={password}
                  onChange={(e) => {
                    SetPassword(e.target.value);
                  }}
                />
                <button
                  style={{
                    width: "25rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "1rem",
                  }}
                  className="btn-customize"
                  onClick={(e) => {
                    userService
                      .register(firstName, lastName, email, password)
                      .then((data) => {
                        console.log(data);
                        props.history.push("/login");
                      })
                      .catch((err) => {
                        console.log(err);
                        toast.error(err.response.data, {
                          position: toast.POSITION.TOP_LEFT,
                        });
                      });
                  }}
                >
                  Sign up
                </button>
                <p>Or sign up with</p>
                <div className="social-buttons">
                  <button href="" className="social-facebook">
                    <FaFacebookF className="social-icons" /> Facebook
                  </button>
                  <button href="" className="social-google">
                    <FaGoogle className="social-icons" /> Google
                  </button>
                </div>
                <p>
                  Already have an account? <a href="">Login</a>
                </p>
              </div>
            </section>
          </div> */}
      </section>
    </div>
  );
};

export default MailingHorizontal;
