import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CreateAccountPage.css";
import logo from "../assets/logo.png";

export function SignInPage() {
  return (
    <div className="sign-in-page">
      <img src={logo} width="200px" alt="indeed-logo" />
      <div className="form-container">
        <h3>Ready to take the next step?</h3>
        <h4>Create an account or sign in.</h4>
        <p>
          By creating an account or logging in, you understand and agree to
          GjejeVet's <a href="">Terms</a>. You also acknowledge our{" "}
          <a href="">Cookie</a> and <a href="">Privacy</a> policies.
        </p>
        <form
          className="form-section"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button className="sign-in-btn" type="submit">
            Sign In
          </button>
        </form>

        <div className="or-div">
          <hr />
          OR
          <hr />
        </div>
        <div>
          <form className="create-account-section">
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input type="email" name="email" required />
            <button className="signup-btn" type="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
