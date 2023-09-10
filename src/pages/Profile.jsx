import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import { useParams } from "react-router-dom";
import ProfileTop from "../components/Profile/ProfileTop/ProfileTop";
import ProfileBottom from "../components/Profile/ProfileBottom/ProfileBottom";

export default function Profile() {
  const { username } = useParams();
  return (
    <AppLayout >
      <section className="profile-container">
        <ProfileTop />
        <ProfileBottom />
      </section>
    </AppLayout>
  );
}
