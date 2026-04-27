export const profileInputReducers = (state, action) => {
  switch (action.type) {
    case "CLEARPROFILEINPUTVALUES":
      return {
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
      };

    case "UPDATEUSERNAME":
      console.log("state: ", state);
      return { ...state, username: action.payload };

    case "UPDATEPROFILEPICTURE":
      return { ...state, profilePicture: action.payload };

    case "UPDATEFIRSTNAME":
      return { ...state, firstName: action.payload };

    case "UPDATELASTNAME":
      return { ...state, lastName: action.payload };

    case "UPDATEEMAIL":
      return { ...state, email: action.payload };

    case "UPDATEPHONE":
      return { ...state, phone: action.payload };

    case "UPDATESTREETADDRESS":
      return { ...state, streetAddress: action.payload };

    case "UPDATECITY":
      return { ...state, city: action.payload };

    case "UPDATESTATE":
      return { ...state, state: action.payload };

    case "UPDATEZIPCODE":
      return { ...state, zipCode: action.payload };

    case "UPDATECOUNTRY":
      return { ...state, country: action.payload };

    case "UPDATEJOBTITLE":
      return { ...state, jobTitle: action.payload };

    case "UPDATECOMPANY":
      return { ...state, company: action.payload };

    case "UPDATEBIO":
      return { ...state, bio: action.payload };
  }
};
