import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import PostLink from "../utils/shared/component/PostLink";
import ProfileLink from "../utils/shared/component/ProfileLink";

const Container = () => {
  return (
    <div className="container">
      <div style={{ flex: 2 }}>{ar}</div>
      <div style={{ flex: 1 }}>
        <ProfileLink
          label={
            <img
              src="https://source.unsplash.com/random/200x200?sig=78"
              alt=""
              style={{
                width: "calc(100% - 0.4rem)",
                margin: "0.2rem",
                height: "calc(100% - 0.6rem)",
              }}
            />
          }
          key={78}
          id={78}
        />
      </div>
    </div>
  );
};
const ar = [];
for (let i = 80; i < 84; i++) {
  ar.push(
    <PostLink
      label={
        <img
          src={`https://source.unsplash.com/random/200x200?sig=${i}`}
          alt=""
          style={{
            width: "calc(100% / 2 - 0.4rem)",
            margin: "0.2rem",
          }}
        />
      }
      id={i}
      key={i}
    />
  );
}
export default function Explore() {
  return (
    <AppLayout>
      <div className="explore">
        <Container></Container>
        <Container></Container>
        <Container></Container>
      </div>
    </AppLayout>
  );
}
