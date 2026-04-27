import ProfileHeader from "../ProfileHeader";
import ProfileStats from "../ProfileStats";
import ProfileDetails from "../ProfileDetails";

import React from "react";
import "./index.css";

const UserProfileSettings = () => {
  return (
    <>
      <ProfileHeader />

      <main className="flex min-h-screen justify-center bg-[#f9fafb] p-8">
        <div>
          <ProfileStats />
          <ProfileDetails />
        </div>
      </main>
    </>
  );
};

export default UserProfileSettings;
