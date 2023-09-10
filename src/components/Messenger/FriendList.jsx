import React from "react";
import { Avatar, List } from "antd";
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 5",
  },
  {
    title: "Ant Design Title 6",
  },
  {
    title: "Ant Design Title 7",
  },
  {
    title: "Ant Design Title 8",
  },
  {
    title: "Ant Design Title 9",
  },
];
const App = () => {
  return (
    <div
      style={{
        flex: 1,
        height: "100vh",
        overflow: "auto",
        position: "relative",
      }}
    >
      <h2
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          height: "4rem",
          margin: 0,
          paddingTop: 15,
          background: "rgb(250 250 250 / 100%)",
          borderBottom: "1px solid rgb(214 212 212 / 40%)",
        }}
      >
        Messages
      </h2>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications"
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default App;
