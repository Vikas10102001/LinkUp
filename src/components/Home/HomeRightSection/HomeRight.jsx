import React from "react";
import SuggestedFriends from "./SuggestedFriend/SuggestedFriends";
import ProfileCard from "./ProfileCard";
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { useSelector } from "react-redux";

export default function HomeRight() {
  const userDetails = useSelector((state) => {
    return state.user.userDetails;
  });
  return (
    <>
      <section className="home-right_top">
        <ProfileCard
          username={userDetails?.username}
          avatarIcon={<UserOutlined />}
          avatarSize={60}
          link={"Switch"}
        />
      </section>
      <section className="home-right_middle">
        <SuggestedFriends />
      </section>
      <section className="home-right_footer">
        <Title
          level={5}
          style={{
            fontWeight: "400",
            color: "#c7c7c7",
            fontSize: "14px",
            textTransform: "uppercase",
            marginTop: "2rem",
          }}
        >
          &copy;{`${new Date().getFullYear()} LinkUp by Vikas Chand`}
        </Title>
      </section>
    </>
  );
}
