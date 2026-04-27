import { createSlice } from "@reduxjs/toolkit";
// profileSettings.profile.

const profileSettingsSlice = createSlice({
  name: "profileSettings",
  initialState: {
    editMode: false,
    profile: {
      onlineInfo: {
        username: "johndoe_dev",
        profilePicture:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      personalInfo: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
      },
      address: {
        streetAddress: "123 Developer Street",
        city: "San Francisco",
        state: "CA",
        zipCode: "94105",
        country: "United States",
      },
      professionalInfo: {
        jobTitle: "Senior Software Engineer",
        company: "Tech Innovations Inc.",
        bio: "Full-stack developer passionate about creating amazing user experiences.",
      },
    },
  },
  reducers: {
    setEditMode(state, action) {
      state.editMode = !state.editMode;
    },
    setOnlineInfo(state, action) {
      state.profile.onlineInfo = action.payload;
    },
    setPersonalInfo(state, action) {
      state.profile.personalInfo = action.payload;
    },
    setAddress(state, action) {
      state.profile.address = action.payload;
    },
    setProfessionalInfo(state, action) {
      state.profile.professionalInfo = action.payload;
    },
  },
});

export const {
  setEditMode,
  setOnlineInfo,
  setPersonalInfo,
  setAddress,
  setProfessionalInfo,
} = profileSettingsSlice.actions;
export default profileSettingsSlice.reducer;
