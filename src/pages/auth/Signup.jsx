import { Button, Form, Input} from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { validatePassword } from "../../utils/shared/validator";
import { loginUser } from "../../utils/auth";
import { useSignupMutation } from "../../store/store";
import AuthContainer from "../../utils/shared/component/AuthContainer";

export default function Signup() {
  const [signup, results] = useSignupMutation();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const user = {
      username: values.username,
      email: values.email,
      password: values.password,
      passwordConfirm: values["confirm-password"],
    };
    loginUser(signup, user);
  };
  return (
    <AuthContainer onFinish={onFinish} showTitle={true}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
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
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirm-password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your Password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign up
        </Button>
        &nbsp; &nbsp; Or &nbsp; <Link to="/login">Login!</Link>
      </Form.Item>
    </AuthContainer>
  );
}
