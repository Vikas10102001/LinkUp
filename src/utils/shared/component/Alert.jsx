import { Alert, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import alertSlice from "../../../store/slice/alert";
const AlertMessage = ({ type, content }) => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      dispatch(alertSlice.actions.setAlert(null));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return visible ? (
    <Space
      direction="vertical"
      style={{
        width: "  max-content ",
        position: "absolute",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Alert message={content} type={type} showIcon />
    </Space>
  ) : null;
};
export default AlertMessage;
