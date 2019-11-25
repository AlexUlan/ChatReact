import React from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";
import { Button, Block } from "../../../components";

export default ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item hasFeedback validateStatus="success">
            <Input
              id="name"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            validateStatus={
              !touched.password ? "" : errors.password ? "error" : "success"
            }
            help={!touched.password ? "" : errors.password}
          >
            <Input
              id="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              /*  type="password" */
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              войти в акаунт
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/register">
            Зарегестрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};
