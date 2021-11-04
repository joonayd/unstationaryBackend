import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import userService from "../../services/UserService";
import { toast } from "react-toastify";

const Register = (props) => {
  const [email, SetEmail] = React.useState("");
  const [password, SetPassword] = React.useState("");
  const [firstName, SetFirstName] = React.useState("");
  const [lastName, SetLastName] = React.useState("");
  return (
    <div className="container-auth">
      <section className="auth-section">
        <img src="../../imgs/logo.jfif" alt="" />
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
            style={{ width: "25rem", marginLeft: "auto", marginRight: "auto", marginTop: "1rem" }}
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
    </div>
  );
};

export default Register;
