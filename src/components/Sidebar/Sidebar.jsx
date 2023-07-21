import {
  CompassOutlined,
  HeartOutlined,
  HomeOutlined,
  MessageOutlined,
  PlusSquareOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import CreatePostModal from "../CreatePost/CreatePostModal";
import SidebarDrawer from "../../utils/shared/component/SidebarDrawer";
import Search from "../Search/Search";
import Notification from "../Notification/Notification";

function getItem(label, key, icon, path, type) {
  return {
    key,
    icon,
    label,
    path,
    type,
  };
}
const items = [
  getItem(
    "Home",
    "1",
    <HomeOutlined style={{ fontSize: "20px" }} />,
    "/",
    "link"
  ),
  getItem("Search", "2", <SearchOutlined style={{ fontSize: "20px" }} />),
  getItem(
    "Explore",
    "3",
    <CompassOutlined style={{ fontSize: "20px" }} />,
    "/explore",
    "link"
  ),
  getItem(
    "Message",
    "4",
    <MessageOutlined style={{ fontSize: "20px" }} />,
    "/messenger",
    "link"
  ),
  getItem("Notification", "5", <HeartOutlined style={{ fontSize: "20px" }} />),
  getItem("Create", "6", <PlusSquareOutlined style={{ fontSize: "20px" }} />),
];

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const pathKeys = useMemo(
    () => ({
      "/": "1",
      "/explore": "3",
      "/messenger": "4",
    }),
    []
  );
  const location = useLocation();
  const [currentPathKey, setCurrentPathKey] = useState(
    pathKeys[location.pathname]
  );
  const toggleSearchDrawer = () => {
    setOpenNotification(false);
    setOpenSearch(!openSearch);
    if(!(collapsed===true && openNotification===true))
    setCollapsed(!collapsed)
  };
  const toggleNotificationDrawer = () => {
    setOpenSearch(false);
    setOpenNotification(!openNotification);
    if(!(collapsed===true && openSearch===true))
    setCollapsed(!collapsed)
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const sideBarButtonOnClick = {
    6: showModal,
    2: toggleSearchDrawer,
    5: toggleNotificationDrawer,
  };

  useEffect(() => {
    setCurrentPathKey(pathKeys[location.pathname]);
  }, [location.pathname, pathKeys]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        theme="light"
        style={{
          width: 256,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingLeft: `${collapsed ? "0px" : "20px"}`,
          paddingTop: 40,
          borderInlineEnd: "1px solid rgba(5, 5, 5, 0.08)",
          position: "fixed",
          top: 0,
          bottom: 0,
          background: "white",
        }}
        collapsed={collapsed}
      >
        {!collapsed ? (
          <Link to="/">
            <Logo />
          </Link>
        ) : (
          <LogoIcon additionalStyles={{ marginLeft: 15 }} />
        )}
        <Menu
          defaultSelectedKeys={[currentPathKey]}
          mode="inline"
          theme="light"
          style={{
            marginTop: "20px",
            border: "none",
          }}
        >
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              style={{ fontSize: "16px", marginTop: "20px" }}
              onClick={sideBarButtonOnClick[item.key]}
            >
              {item.type === "link" ? (
                <Link to={item.path}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <CreatePostModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <SidebarDrawer title="Search" open={openSearch} setOpen={setOpenSearch}>
        <Search />
      </SidebarDrawer>
      <SidebarDrawer
        title="Notification"
        open={openNotification}
        setOpen={setOpenNotification}
      >
        <Notification />
      </SidebarDrawer>
    </>
  );
};

export default Sidebar;
