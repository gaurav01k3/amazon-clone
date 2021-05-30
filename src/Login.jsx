import React, { useState } from "react";
import "./CSS/login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // login here with fire base
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    //register here with firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfuly created a new user with this email and pass
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.acisolutions.net/wp-content/uploads/2019/09/amazon-logo-vector-png-amazon-logo-vector-512.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button type="submit" onClick={signIn} className="login__signInButton">
          Sign-In
        </button>
        <p>
          By continuing, you agree to Amazon's <strong>CLONE</strong>
          <span className="login__span"> Conditions of Use</span> and
          <span className="login__span"> Privacy Notice.</span>
        </p>
      </div>
      <p>New to Amazon?</p>
      <button onClick={register} className="login__registerButton">
        Create an Amazon account
      </button>
    </div>
  );
};

export default Login;
