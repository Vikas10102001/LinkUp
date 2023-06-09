import { Col, Layout, Row } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { validatePassword } from "../../utils/shared/validator";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

export default function Login() {
  //   const [login, results] = useSigninMutation();

  const handleSigninRedirect = () => {
    localStorage.setItem("currentPathKey", "signup");
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // loginUser(login, values);
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
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            style={{
              marginTop: "30px",
              width:'90%'
            }}
          >
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
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              &nbsp; &nbsp; Or &nbsp;{" "}
              <Link to="/signup" onClick={handleSigninRedirect}>
                register now!
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
}
