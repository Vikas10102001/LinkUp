import { Modal } from "antd";
import Title from "antd/es/typography/Title";
const LikeModal = ({ isModalOpen, handleCancel }) => {
  return (
    <Modal
      title={
        <Title level={4} style={{ textAlign: "center", margin: 0, padding: 0 }}>
          Likes
        </Title>
      }
      open={isModalOpen}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
export default LikeModal;
