import React, { Component } from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";
import { Button, Block } from "../../../components";

export default class RegisterForm extends Component {
  render() {
    const sucsess = true;
    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат вам нужно зарегистрироваться</p>
        </div>
        <Block>
          {!sucsess ? (
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item hasFeedback validateStatus="success">
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  size="large"
                  placeholder="E-Mail"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  size="large"
                  placeholder="Ваше имя"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  size="large"
                  type="password"
                  placeholder="Пароль"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  size="large"
                  type="password"
                  placeholder="Повтарите пароль"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
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
  }
}
