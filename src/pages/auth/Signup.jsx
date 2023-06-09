import { Col, Layout, Row, Button, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { validatePassword } from "../../utils/shared/validator";
import Logo from "../../components/Logo/Logo";

export default function Signup() {
  const handleSignupRedirect = () => {
    localStorage.setItem("currentPathKey", "signin");
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const user = {
      name: values.username,
      email: values.email,
      password: values.password,
    };
    // loginUser(signupUser, user);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Row>
        <Col
          span={8}
          offset={8}
          style={{
            padding: "2rem",
            border: "1px solid #0000001f",
            borderRadius: "5px",
            marginTop: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Logo
            additionalStyles={{
              fontSize: "50px",
            }}
          />
          <Typography.Title
            level={5}
            style={{ textAlign: "center", color: "#000000a3" }}
          >
            Sign up to see photos and videos from your friends.
          </Typography.Title>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            style={{
              marginTop: "30px",
              width: "90%",
            }}
            onFinish={onFinish}
          >
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
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
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
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Sign up
              </Button>
              &nbsp; &nbsp; Or &nbsp;{" "}
              <Link to="/login" onClick={handleSignupRedirect}>
                Login!
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
}
