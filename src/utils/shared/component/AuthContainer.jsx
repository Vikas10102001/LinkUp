import { Col, Layout, Row, Typography } from "antd";
import { Form } from "antd";
import React from "react";
import Logo from "../../../components/Logo/Logo";

const SignupTitle = () => {
  return (
    <Typography.Title
      level={5}
      style={{ textAlign: "center", color: "#000000a3" }}
    >
      Sign up to see photos and videos from your friends.
    </Typography.Title>
  );
};
export default function AuthContainer({ children, onFinish, showTitle }) {
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
          {showTitle && <SignupTitle />}
          <Form
            name="auth_container"
            className="auth-container"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            style={{
              marginTop: "30px",
              width: "90%",
            }}
          >
            {children}
          </Form>
        </Col>
      </Row>
    </Layout>
  );
}
