import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { validatePassword } from "../../utils/shared/validator";
import { Link } from "react-router-dom";
import { useSigninMutation } from "../../store/store";
import { loginUser } from "../../utils/auth";
import AuthContainer from "../../utils/shared/component/AuthContainer";

export default function Login() {
  const [login, results] = useSigninMutation();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    loginUser(login, values);
  };
  return (
    <AuthContainer onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
        ]}
      >
        <Input
          type="email"
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
          {
            validator(_, value) {
              if (!value || validatePassword(value)) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(
                  "Provide atleast one uppercase , lowercase, special character and a number"
                )
              );
            },
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="/forget password">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        &nbsp; &nbsp; Or &nbsp; <Link to="/signup">register now!</Link>
      </Form.Item>
    </AuthContainer>
  );
}
