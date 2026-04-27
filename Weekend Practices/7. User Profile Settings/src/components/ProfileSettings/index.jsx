import Modal from "react-modal";
import { X, Camera, User, MapPin, Briefcase, Save } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import {
  setEditMode,
  setOnlineInfo,
  setPersonalInfo,
  setAddress,
  setProfessionalInfo,
} from "../../store/profileSettingsSlice";
import { profileInputReducers } from "../../store/profileInputReducers";

import React, { useReducer } from "react";
import "./index.css";

const ProfileSettings = () => {
  const profileSettings = useSelector((state) => state.profileSettings);
  const [profileInputValues, dispatchPIR] = useReducer(profileInputReducers, {
    username: "",
    profilePicture: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    jobTitle: "",
    company: "",
    bio: "",
  });

  const dispatchPS = useDispatch();

  const clearForm = () => {
    dispatchPS(setEditMode());
    clearProfileInputValues();
  };

  const handleSubmit = () => {
    // TO DO: Update the profile settings in the Redux store.

    dispatchPS(
      setOnlineInfo({
        username: profileInputValues.username,
        profilePicture: profileInputValues.profilePicture,
      }),
    );

    dispatchPS(
      setPersonalInfo({
        firstName: profileInputValues.firstName,
        lastName: profileInputValues.lastName,
        email: profileInputValues.email,
        phone: profileInputValues.phone,
      }),
    );

    dispatchPS(
      setAddress({
        streetAddress: profileInputValues.streetAddress,
        city: profileInputValues.city,
        state: profileInputValues.state,
        zipCode: profileInputValues.zipCode,
        country: profileInputValues.country,
      }),
    );

    dispatchPS(
      setProfessionalInfo({
        jobTitle: profileInputValues.jobTitle,
        company: profileInputValues.company,
        bio: profileInputValues.bio,
      }),
    );

    clearForm();
  };

  const clearProfileInputValues = () => {
    dispatchPIR({ type: "CLEARPROFILEINPUTVALUES" });
  };

  const updateUsername = (event) => {
    dispatchPIR({ type: "UPDATEUSERNAME", payload: event.target.value });
  };

  const updateProfilePicture = (event) => {
    dispatchPIR({
      type: "UPDATEPROFILEPICTURE",
      payload: event.target.value,
    });
  };

  const updateFirstName = (event) => {
    dispatchPIR({
      type: "UPDATEFIRSTNAME",
      payload: event.target.value,
    });
  };

  const updateLastName = (event) => {
    dispatchPIR({
      type: "UPDATELASTNAME",
      payload: event.target.value,
    });
  };

  const updateEmail = (event) => {
    dispatchPIR({
      type: "UPDATEEMAIL",
      payload: event.target.value,
    });
  };

  const updatePhone = (event) => {
    dispatchPIR({
      type: "UPDATEPHONE",
      payload: event.target.value,
    });
  };

  const updateStreetAddress = (event) => {
    dispatchPIR({
      type: "UPDATESTREETADDRESS",
      payload: event.target.value,
    });
  };

  const updateCity = (event) => {
    dispatchPIR({
      type: "UPDATECITY",
      payload: event.target.value,
    });
  };

  const updateState = (event) => {
    dispatchPIR({
      type: "UPDATESTATE",
      payload: event.target.value,
    });
  };

  const updateZipCode = (event) => {
    dispatchPIR({
      type: "UPDATEZIPCODE",
      payload: event.target.value,
    });
  };

  const updateCountry = (event) => {
    dispatchPIR({
      type: "UPDATECOUNTRY",
      payload: event.target.value,
    });
  };

  const updateJobTitle = (event) => {
    dispatchPIR({
      type: "UPDATEJOBTITLE",
      payload: event.target.value,
    });
  };

  const updateCompany = (event) => {
    dispatchPIR({
      type: "UPDATECOMPANY",
      payload: event.target.value,
    });
  };

  const updateBio = (event) => {
    dispatchPIR({
      type: "UPDATEBIO",
      payload: event.target.value,
    });
  };

  return (
    <>
      {profileSettings.editMode && (
        <Modal
          isOpen={profileSettings.editMode}
          onRequestClose={clearForm}
          // style={customStyles}
          contentLabel="Settings Modal"
        >
          <form
            className="h-full w-full"
            onSubmit={handleSubmit}
            onReset={clearForm}
          >
            <div className="flex items-center justify-between px-6 py-4 pb-5">
              <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>

              <button className="cursor-pointer" type="reset">
                <X className="mt-0.5 mr-2 text-2xl text-gray-700" />
              </button>
            </div>

            <hr className="border-1 border-gray-300" />

            <div className="px-6 py-5">
              <section className="mb-8">
                <div className="mb-4 flex items-center">
                  <Camera className="mt-0.5 mr-4 size-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Profile Picture & Username
                  </h3>
                </div>

                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      className="mr-8 size-23 rounded-full border-3 border-gray-300 object-cover shadow-xs"
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="User's profile picture."
                    />
                  </div>

                  <div className="grid w-[100%] grid-cols-1 gap-4">
                    <div className="flex w-[100%] flex-col">
                      <label
                        className="mb-2 text-sm font-semibold text-gray-700"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        id="username"
                        className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                        onChange={updateUsername}
                        value={profileInputValues.username}
                        type="text"
                        placeholder="Enter a username"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label
                        className="mb-2 text-sm font-semibold text-gray-700"
                        htmlFor="profilePicture"
                      >
                        Profile Picture URL
                      </label>
                      <input
                        id="profilePicture"
                        className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                        onChange={updateProfilePicture}
                        value={profileInputValues.profilePicture}
                        type="text"
                        placeholder="Enter a profile picture"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="mb-4 flex items-center">
                  <User className="mt-0.5 mr-4 size-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Personal Information
                  </h3>
                </div>

                <div className="grid w-[100%] grid-cols-2 gap-4">
                  <div className="flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateFirstName}
                      value={profileInputValues.firstName}
                      type="text"
                      placeholder="Enter a first name"
                    />
                  </div>

                  <div className="flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateLastName}
                      value={profileInputValues.lastName}
                      type="text"
                      placeholder="Enter a last name"
                    />
                  </div>

                  <div className="flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateEmail}
                      value={profileInputValues.email}
                      type="text"
                      placeholder="Enter an email"
                    />
                  </div>

                  <div className="flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updatePhone}
                      value={profileInputValues.phone}
                      type="text"
                      placeholder="Enter a phone number"
                    />
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="mb-4 flex items-center">
                  <MapPin className="mt-0.5 mr-4 size-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Address
                  </h3>
                </div>

                <div className="grid w-[100%] grid-cols-4 gap-4">
                  <div className="col-span-4 flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="streetAddress"
                    >
                      Street Address
                    </label>
                    <input
                      id="streetAddress"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateStreetAddress}
                      value={profileInputValues.streetAddress}
                      type="text"
                      placeholder="Enter a street address"
                    />
                  </div>

                  <div className="flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateCity}
                      value={profileInputValues.city}
                      type="text"
                      placeholder="Enter a city"
                    />
                  </div>

                  <div className="flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <input
                      id="state"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateState}
                      value={profileInputValues.state}
                      type="text"
                      placeholder="Enter a state"
                    />
                  </div>

                  <div className="flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="zipCode"
                    >
                      ZIP Code
                    </label>
                    <input
                      id="zipCode"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateZipCode}
                      value={profileInputValues.zipCode}
                      type="text"
                      placeholder="Enter a zip code"
                    />
                  </div>

                  <div className="flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <input
                      id="country"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateCountry}
                      value={profileInputValues.country}
                      type="text"
                      placeholder="Enter a country"
                    />
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="mb-4 flex items-center">
                  <Briefcase className="mt-0.5 mr-4 size-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Professional Information
                  </h3>
                </div>

                <div className="grid w-[100%] grid-cols-2 gap-4">
                  <div className="flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="jobTitle"
                    >
                      Job Title
                    </label>
                    <input
                      id="jobTitle"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateJobTitle}
                      value={profileInputValues.jobTitle}
                      type="text"
                      placeholder="Enter a job title"
                    />
                  </div>

                  <div className="flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      className="rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateCompany}
                      value={profileInputValues.company}
                      type="text"
                      placeholder="Enter a company"
                    />
                  </div>

                  <div className="col-span-2 flex w-[100%] flex-col">
                    <label
                      className="mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="bio"
                    >
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      className="h-27.5 resize-none rounded-md border-1 border-gray-300 px-4 py-2 pb-2.5 text-base outline-none"
                      onChange={updateBio}
                      value={profileInputValues.bio}
                      type="text"
                      placeholder="Enter a bio"
                    />
                  </div>
                </div>
              </section>

              <hr className="border-1 border-gray-300" />

              <div className="mt-4 flex items-center justify-end">
                <button
                  className="mr-4 flex cursor-pointer items-center rounded-md border-1 border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700"
                  type="reset"
                >
                  <X className="mt-0.5 mr-2 size-5" />
                  <span className="font-semibold">Cancel</span>
                </button>
                <button
                  className="flex cursor-pointer items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 hover:text-gray-200"
                  type="submit"
                >
                  <Save className="mt-0.5 mr-2 size-5" />
                  <span className="font-semibold">Save Changes</span>
                </button>
              </div>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ProfileSettings;
