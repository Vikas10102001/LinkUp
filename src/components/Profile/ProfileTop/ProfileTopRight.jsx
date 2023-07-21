import React from "react";
import Title from "antd/es/typography/Title";
import { Button } from "antd";
import ProfileTopRightDropdown from "./ProfileTopRightDropdown";

export default function ProfileTopRight() {
  return (
    <div className="profile-top-right">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title
          level={4}
          style={{ margin: 0, flexShrink: "0", fontWeight: "400" }}
        >
          Vikas
        </Title>
        <Button style={{ fontWeight: "600" }}>Following</Button>
        <Button style={{ fontWeight: "600" }}>Message</Button>
        <ProfileTopRightDropdown />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop:'1.8rem'}}>
        <span style={{fontSize:'16px'}}>
          <b>76</b>&nbsp;posts
        </span>
        <span style={{fontSize:'16px'}}>
          <b>67</b>&nbsp;followers
        </span>
        <span style={{fontSize:'16px'}}>
          <b>65</b>&nbsp;following
        </span>
      </div>
      <div style={{marginTop:'1rem'}}>
        <div
          className="about"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span>Hello</span>
          <span>Its</span>
          <span>About</span>
          <span>Section</span>
        </div>
        <div style={{marginTop:'1rem'}}>
          <span>Followed by me</span>
        </div>
      </div>
    </div>
  );
}
