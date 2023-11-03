import React, { FC, useContext, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import "../scss/login.scss";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

const resetInput = () => {
  setEmail("")
  setPassword("")
}

  const handleRegisterClick = () => {
    const wrapper = document.querySelector(".wrapper");
    if (wrapper) {
      wrapper.classList.add("active");
      resetInput();
    }
  };
  
  const handleLoginClick = () => {
    const wrapper = document.querySelector(".wrapper");
    if (wrapper) {
      wrapper.classList.remove("active");
      resetInput();
    }
  };

  return (
    <div className="wrapper">
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>
      <div className="form-box login">
        <h2
          className="animation"
          style={
            {
              "--i": 0,
              "--j": 21,
            } as React.CSSProperties
          }
        >
          Login
        </h2>
        <div>
          <div
            className="input-box animation"
            style={
              {
                "--i": 1,
                "--j": 22,
              } as React.CSSProperties
            }
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
              required
            />
            <label>Email</label>
            <i className="bx bxs-envelope"></i>
          </div>
          <div
            className="input-box animation"
            style={
              {
                "--i": 2,
                "--j": 23,
              } as React.CSSProperties
            }
          >
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              required
            />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button
            onClick={() => store.login(email, password)}
            type="submit"
            className="btn animation"
            style={
              {
                "--i": 3,
                "--j": 24,
              } as React.CSSProperties
            }
          >
            login
          </button>
          <div
            className="logreg-link animation"
            style={
              {
                "--i": 4,
                "--j": 25,
              } as React.CSSProperties
            }
          >
            <p>
              Don't have an account?
              <span onClick={handleRegisterClick} className="register-link">
                {" "}
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="info-text login">
        <h2
          className="animation"
          style={
            {
              "--i": 0,
              "--j": 20,
            } as React.CSSProperties
          }
        >
          Welcome Back!
        </h2>
        <p
          className="animation"
          style={
            {
              "--i": 1,
              "--j": 21,
            } as React.CSSProperties
          }
        >
          Lorem ipsum dolor sit amet consectetur, consectetur
        </p>
      </div>
      <div className="form-box register">
        <h2
          className="animation"
          style={
            {
              "--i": 17,
              "--j": 0,
            } as React.CSSProperties
          }
        >
          Register
        </h2>
        <div>
          <div
            className="input-box animation"
            style={
              {
                "--i": 18,
                "--j": 1,
              } as React.CSSProperties
            }
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
              required
            />
            <label>Email</label>
            <i className="bx bxs-envelope"></i>
          </div>
          <div
            className="input-box animation "
            style={
              {
                "--i": 19,
                "--j": 2,
              } as React.CSSProperties
            }
          >
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              required
            />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button
            onClick={() => store.registration(email, password)}
            type="submit"
            className="btn animation"
            style={
              {
                "--i": 20,
                "--j": 3,
              } as React.CSSProperties
            }
          >
            Register
          </button>
          <div
            className="logreg-link animation"
            style={
              {
                "--i": 21,
                "--j": 4,
              } as React.CSSProperties
            }
          >
            <p>
              Already have an account?
              <span onClick={handleLoginClick} className="login-link">
                {" "}
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="info-text register animation">
        <h2
          className="animation"
          style={
            {
              "--i": 17,
              "--j": 0,
            } as React.CSSProperties
          }
        >
          Welcome Back!
        </h2>
        <p
          className="animation"
          style={
            {
              "--i": 18,
              "--j": 1,
            } as React.CSSProperties
          }
        >
          Lorem ipsum dolor sit amet consectetur, consectetur
        </p>
      </div>
    </div>
  );
};

export default observer(LoginForm);
