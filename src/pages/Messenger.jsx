import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import FriendList from "../components/Messenger/FriendList";
import Messages from "../components/Messenger/Messages";

export default function Messenger() {
  return (
    <AppLayout partition={4}>
      <div style={{ display: "flex" }}>
        <FriendList></FriendList>
        <Messages></Messages>
      </div>
    </AppLayout>
  );
}
