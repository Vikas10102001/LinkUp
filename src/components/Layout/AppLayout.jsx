import { Col, Row } from "antd";
import Sidebar from "../Sidebar/Sidebar";
const AppLayout = ({ children }) => (
  <Row>
    <Col span={7} className="layout-section_left">
      <Sidebar />
    </Col>
    <Col span={17} className="layout-section_right">
      {children}
    </Col>
  </Row>
);
export default AppLayout;
