import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import userService from "../../services/UserService";

const Login = () => {
  const [email, SetEmail] = React.useState("");
  const [password, SetPassword] = React.useState("");
  return (
    <div className="container-auth">
      <section className="auth-section">
        <img src="../../imgs/logo.jfif" alt="" />
        <h3>Login</h3>
        <p>You'll never want to logout again</p>
        <div className="auth-inputs">
          <input
            type="email"
            placeholder=" Email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder=" Password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <button
            style={{ width: "25rem", marginLeft: "auto", marginRight: "auto", marginTop: "1rem" }}
            className="btn-customize"
            onClick={(e) => {
              userService
                .login(email, password)
                .then((data) => {
                  console.log(data);
                  window.location.href = "/size-select";
                })
                .catch((err) => {
                  console.log(err);
                  toast.error(err.response.data, {
                    position: toast.POSITION.TOP_LEFT,
                  });
                });
            }}
          >
            Login
          </button>
          <p>Or continue with</p>
          <div className="social-buttons">
            <button href="" className="social-facebook">
              <FaFacebookF className="social-icons" /> Facebook
            </button>
            <button href="" className="social-google">
              <FaGoogle className="social-icons" /> Google
            </button>
          </div>
          <p>
            Dont have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
