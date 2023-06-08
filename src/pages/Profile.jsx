import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { username } = useParams();
  return (
    <AppLayout>
      <h1>this is profile of {username} </h1>
    </AppLayout>
  );
}
