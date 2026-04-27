import LeaderboardTable from "../LeaderboardTable";

import { BallTriangle } from "react-loader-spinner";

import { LeaderboardContainer } from "./styledComponents";
import { useState, useEffect } from "react";

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const Leaderboard = () => {
  // Your code goes here...

  const [apiResponse, setApiResponse] = useState({
    status: apiConstants.initial,
    data: null,
    errorMsg: null,
  });

  useEffect(() => {
    setApiResponse({
      status: apiConstants.inProgress,
      data: null,
      errorMsg: null,
    });

    const getLeaderboardData = async () => {
      const url = "https://apis.ccbp.in/leaderboard";
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        const formattedData = data.leaderboard_data.map((eachObj) => ({
          id: eachObj.id,
          rank: eachObj.rank,
          profileImgUrl: eachObj.profile_image_url,
          name: eachObj.name,
          score: eachObj.score,
          language: eachObj.language,
          timeSpent: eachObj.time_spent,
        }));

        setApiResponse({
          status: apiConstants.success,
          data: formattedData,
          errorMsg: null,
        });
      } else {
        setApiResponse({
          status: apiConstants.failure,
          data: null,
          errorMsg: data.error_msg,
        });
      }
    };

    getLeaderboardData();
  }, []);

  const renderLeaderboard = () => {
    const { status } = apiResponse;

    switch (status) {
      case apiConstants.success:
        return renderSuccess();
      case apiConstants.failure:
        return renderFailure();
      case apiConstants.inProgress:
        return renderInProgress();
      default:
        return null;
    }
  };

  const renderSuccess = () => (
    <LeaderboardTable leaderboardData={apiResponse.data} />
  );

  const renderFailure = () => {
    alert(apiResponse.errorMsg);
  };

  const renderInProgress = () => (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );

  return <LeaderboardContainer>{renderLeaderboard()}</LeaderboardContainer>;
};

export default Leaderboard;
