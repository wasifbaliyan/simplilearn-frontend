import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./Login.css";

export default function Login() {
  const [login, setLogin] = useState(true);
  return (
    <div className="login__container">
      <section className="form__container">
        <h2 className="login__heading">Sign in to your account</h2>
        {login ? (
          <LoginForm setLogin={setLogin} />
        ) : (
          <RegisterForm setLogin={setLogin} />
        )}

        {login ? (
          <div className="login__type">
            Not a user?{" "}
            <button
              className="login__type__button"
              onClick={() => setLogin(!login)}
            >
              Register
            </button>
          </div>
        ) : (
          <div className="login__type">
            Already registered?{" "}
            <button
              className="login__type__button"
              onClick={() => setLogin(!login)}
            >
              Login
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
