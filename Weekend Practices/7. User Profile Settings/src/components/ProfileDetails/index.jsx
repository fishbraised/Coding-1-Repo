import { Mail, MapPin, Phone, Briefcase } from "lucide-react";

import { useSelector } from "react-redux";

import React from "react";
import "./index.css";

const ProfileDetails = () => {
  const profileSettings = useSelector((state) => state.profileSettings);

  return (
    <ul className="mt-15 grid grid-cols-2 gap-7">
      <li className="h-73.75 w-100 rounded-xl border-1 border-gray-100 bg-white shadow-md">
        <div className="blue-50 flex items-center bg-blue-50 px-6 py-4">
          <Mail className="mt-0.5 mr-3 size-6 text-blue-600" />
          <p className="text-lg font-semibold text-gray-900">
            Contact Information
          </p>
        </div>

        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Mail className="mt-0.25 mr-2 size-4 text-gray-400" />
              <p className="text-sm font-semibold text-gray-600">Email:</p>
            </div>
            <p className="text-base font-semibold text-gray-900">
              {profileSettings.profile.personalInfo.email}
            </p>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Phone className="mt-0.25 mr-2 size-4 text-gray-400" />
              <p className="text-sm font-semibold text-gray-600">Phone:</p>
            </div>
            <p className="text-base font-semibold text-gray-900">
              {profileSettings.profile.personalInfo.phone}
            </p>
          </div>
        </div>
      </li>

      <li className="h-73.75 w-100 rounded-xl border-1 border-gray-100 bg-white shadow-md">
        <div className="blue-50 flex items-center bg-red-50 px-6 py-4">
          <MapPin className="mt-0.5 mr-3 size-6 text-red-600" />
          <p className="text-lg font-semibold text-gray-900">Address</p>
        </div>

        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">Street:</p>
            <p className="text-base font-semibold text-gray-900">
              {profileSettings.profile.address.streetAddress}
            </p>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">City:</p>
            <p className="text-base font-semibold text-gray-900">
              {profileSettings.profile.address.city}
            </p>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">State:</p>
            <p className="text-base font-semibold text-gray-900">
              {profileSettings.profile.address.state}
            </p>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">ZIP Code:</p>
            <p className="text-base font-semibold text-gray-900">
              {profileSettings.profile.address.zipCode}
            </p>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">Country:</p>
            <p className="text-base font-semibold text-gray-900">
              {profileSettings.profile.address.country}
            </p>
          </div>
        </div>
      </li>

      <li className="h-73.75 w-100 rounded-xl border-1 border-gray-100 bg-white shadow-md">
        <div className="blue-50 flex items-center bg-purple-50 px-6 py-4">
          <Briefcase className="mt-0.5 mr-3 size-6 text-purple-600" />
          <p className="text-lg font-semibold text-gray-900">Professional</p>
        </div>

        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">Job Title:</p>
            <p className="text-base font-semibold text-gray-900">
              {profileSettings.profile.professionalInfo.jobTitle}
            </p>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">Company:</p>
            <p className="text-base font-semibold text-gray-900">
              {profileSettings.profile.professionalInfo.company}
            </p>
          </div>

          <div className="mb-4">
            <p className="mb-0.5 text-sm font-semibold text-gray-600">Bio:</p>
            <p className="overflow-auto text-sm leading-6 text-gray-900">
              {profileSettings.profile.professionalInfo.bio}
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ProfileDetails;
