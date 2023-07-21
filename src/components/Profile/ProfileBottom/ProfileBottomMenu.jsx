import { AppstoreOutlined, TagsOutlined } from "@ant-design/icons";
import React from "react";

const ProfileBottomMenu = ({ current, setCurrent }) => {
  const handlePostMenu = () => {
    setCurrent("POSTS");
  };
  const handleTaggedMenu = () => {
    setCurrent("TAGGED");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MenuItem
        icon={
          <AppstoreOutlined
            style={{ color: `${current === "POSTS" ? "black" : "#737373"}` }}
          />
        }
        text="Posts"
        onClick={handlePostMenu}
        isSelected={current === "POSTS" ? true : false}
      />
      <MenuItem
        icon={
          <TagsOutlined
            style={{ color: `${current === "TAGGED" ? "black" : "#737373"}` }}
          />
        }
        text="Tagged"
        onClick={handleTaggedMenu}
        isSelected={current === "TAGGED" ? true : false}
      />
    </div>
  );
};

const MenuItem = ({ icon, text, onClick, isSelected }) => {
  return (
    <div
      style={{
        margin: "0rem 1.5rem 1rem 1.5rem",
        paddingTop: "1rem",
        cursor: "pointer",
        borderTop: `${isSelected ? "1px solid black" : ""}`,
      }}
      onClick={onClick}
    >
      {icon}
      <span
        style={{
          color: `${isSelected ? "black" : "#737373"}`,
          textTransform: "uppercase",
          marginLeft: "0.5rem",
          fontSize: "13px",
          fontWeight: "500",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default ProfileBottomMenu;
