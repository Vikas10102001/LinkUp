import React, { useEffect } from "react";
import AppLayout from "../components/Layout/AppLayout";
import Story from "../components/Home/HomeLeftSection/Story/Story";
import PostFeed from "../components/Home/HomeLeftSection/PostFeed/PostFeed";

import { Col, Row } from "antd";
import HomeRight from "../components/Home/HomeRightSection/HomeRight";
import store, { setUser } from "../store/store";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("auth"));
    console.log(userDetails)
    if (!userDetails) {
      navigate("/login");
    } else {
      store.dispatch(setUser(userDetails.data));
    }
  }, [navigate]);
  return (
    <AppLayout >
      <Row>
        <Col span={11} className="home-section_left">
          <Story />
          <PostFeed />
        </Col>
        <Col span={13} className="home-section_right">
          <HomeRight />
        </Col>
      </Row>
    </AppLayout>
  );
}
