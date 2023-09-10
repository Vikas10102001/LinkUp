import { Col, Row } from "antd";
import Sidebar from "../Sidebar/Sidebar";
const AppLayout = ({ children, partition }) => {
  let colSpan = partition ? partition : 7;
  return (
    <Row>
      <Col span={colSpan} className="layout-section_left">
        <Sidebar />
      </Col>
      <Col span={24 - colSpan} className="layout-section_right">
        {children}
      </Col>
    </Row>
  );
};
export default AppLayout;
