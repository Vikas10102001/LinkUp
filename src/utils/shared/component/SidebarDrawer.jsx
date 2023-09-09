import { Drawer } from "antd";
import React from "react";

export default function SidebarDrawer({
  children,
  title,
  open,
  setOpen,
  setCollapsed,
}) {
  const handleSearchClose = () => {
    setOpen(false);
    setCollapsed(false);
  };
  return (
    <Drawer
      title={title}
      placement="left"
      closable={true}
      mask={false}
      onClose={handleSearchClose}
      open={open}
      key="left"
      style={{
        position: "relative",
        left: "81px",
        borderRadius: "0 20px 20px 0 ",
        boxShadow: "9px 2px 64px 1px rgba(0,0,0,0.2)",
      }}
      keyboard={true}
      maskClosable={true}
    >
      {children}
    </Drawer>
  );
}
