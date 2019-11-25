import React, { Component } from "react";
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
  const sucsess = false;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!sucsess ? (
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
              hasFeedback
              validateStatus={
                !touched.email ? "" : errors.email ? "error" : "success"
              }
              help={!touched.email ? "" : errors.email}
            >
              <Input
                id="email"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="E-Mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              validateStatus={
                !touched.name ? "" : errors.name ? "error" : "success"
              }
              help={!touched.name ? "" : errors.name}
            >
              <Input
                id="name"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Ваше имя"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              validateStatus={
                !touched.password ? "" : errors.password ? "error" : "success"
              }
              help={!touched.password ? "" : errors.password}
            >
              <Input
                id="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Пароль"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              validateStatus={
                !touched.password2 ? "" : errors.password2 ? "error" : "success"
              }
              help={!touched.password2 ? "" : errors.password2}
            >
              <Input
                id="password2"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Повтарите пароль"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={handleSubmit}
                type="primary"
                htmlType="submit"
                size="large"
              >
                Зарегестрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/login">
              Войти в акаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__sucsses-block">
            <div>
              <Icon
                style={{ fontSize: "51px" }}
                type="info-circle"
                theme="twoTone"
              />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>На вашу почту отправленная ссылка с потверждением почты</p>
          </div>
        )}
      </Block>
    </div>
  );
};
