import React from "react";
import "./Auth.scss";
import { Route } from "react-router-dom";
import { LoginForm, RegisterForm } from "../../modules";

const Auth = props => {
  return (
    <section className="auth">
      <div className="auth_content">
        <Route exact path={["/", "/login"]} component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        {/*     <LoginForm /> */}
      </div>
    </section>
  );
};

export default Auth;
