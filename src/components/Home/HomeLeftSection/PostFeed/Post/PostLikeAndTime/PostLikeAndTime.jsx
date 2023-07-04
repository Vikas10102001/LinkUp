import React, { useState } from "react";
import LikeModal from "./LikeModal";
import ProfileLink from "../../../../../../utils/shared/component/ProfileLink";

export default function PostLikeAndTime() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="post-like-time">
        <div className="like">
          Liked by <ProfileLink label={"Vikas"} id="user_id" additionalStyles={{fontWeight:'600'}}/> and{" "}
          <span className="liked-user_others" onClick={showModal}>
            59 others
          </span>
        </div>
        <span className="post-time">posted 5 hrs ago</span>
      </div>
      {isModalOpen && (
        <LikeModal isModalOpen={isModalOpen} handleCancel={handleCancel} />
      )}
    </>
  );
}
