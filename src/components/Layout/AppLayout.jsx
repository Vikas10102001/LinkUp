import { Col, Row } from "antd";
import Sidebar from "../Sidebar/Sidebar";
const AppLayout = ({ children }) => (
  <Row>
    <Col span={7}>
      <Sidebar />
    </Col>
    <Col span={17}>{children}</Col>
  </Row>
);
export default AppLayout;
