import { Briefcase, Mail, Phone, MapPin, Settings } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "../../store/profileSettingsSlice";

import React from "react";
import "./index.css";

// header?: relative before:absolute before:inset-0 before:bg-black/5

// TO DO: Send GitHub to teacher Sai.

const ProfileHeader = () => {
  const profileSettings = useSelector((state) => state.profileSettings);

  const dispatch = useDispatch();

  const toggleEditMode = () => {
    dispatch(setEditMode());
  };

  return (
    <header className="flex h-70 items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
      <div>
        <img
          className="mr-8 size-30 rounded-full border-3 border-white/20 object-cover shadow-lg"
          src={profileSettings.profile.onlineInfo.profilePicture}
          alt="User's profile picture."
        />
      </div>

      <div className="w-[40.5%]">
        <h1 className="mb-2 text-4xl font-bold text-white capitalize">
          {profileSettings.profile.personalInfo.firstName +
            " " +
            profileSettings.profile.personalInfo.lastName}
        </h1>
        <p className="mb-1 text-lg text-blue-100">
          @{profileSettings.profile.onlineInfo.username}
        </p>

        <div className="mb-4 flex items-center text-blue-200">
          <Briefcase className="mt-0.5 mr-2 size-5" />
          <p className="text-base">
            {profileSettings.profile.professionalInfo.jobTitle} at{" "}
            {profileSettings.profile.professionalInfo.company}
          </p>
        </div>

        <p className="mb-3 text-base text-blue-100">
          {profileSettings.profile.professionalInfo.bio}
        </p>

        <div className="flex items-center">
          <div className="mr-4 flex items-center text-white">
            <Mail className="mt-0.25 mr-1 size-4" />
            <p className="text-sm">
              {profileSettings.profile.personalInfo.email}
            </p>
          </div>

          <div className="mr-4 flex items-center text-white">
            <Phone className="mt-0.25 mr-1 size-4" />
            <p className="text-sm">
              {profileSettings.profile.personalInfo.phone}
            </p>
          </div>

          <div className="mr-4 flex items-center text-white">
            <MapPin className="mt-0.25 mr-1 size-4" />
            <p className="text-sm">
              {profileSettings.profile.address.city},{" "}
              {profileSettings.profile.address.state}
            </p>
          </div>
        </div>
      </div>

      <button
        className="flex cursor-pointer items-center rounded-lg border-1 border-white/20 bg-white/15 px-5 py-2.5 text-white"
        onClick={toggleEditMode}
      >
        <Settings className="mt-0.5 mr-2 size-5" />
        <span className="text-base font-semibold">Edit Profile</span>
      </button>
    </header>
  );
};

export default ProfileHeader;
