import LeaderboardRow from "../LeaderboardRow";

import {
  LeaderboardTableContainer,
  LeaderboardHeader,
  Rank,
  Name,
  Score,
  Language,
  TimeSpent,
} from "./styledComponents";

const LeaderboardTable = (props) => {
  const { leaderboardData } = props;

  const renderLeaderboardHeader = () => (
    <LeaderboardHeader>
      <Rank>Rank</Rank>
      <Name>Name</Name>
      <Score>Score</Score>
      <Language>Language</Language>
      <TimeSpent>Time Spent</TimeSpent>
    </LeaderboardHeader>
  );

  return (
    <LeaderboardTableContainer>
      {renderLeaderboardHeader()}
      {leaderboardData.map((eachUser) => (
        <LeaderboardRow key={eachUser.id} userDetails={eachUser} />
      ))}
    </LeaderboardTableContainer>
  );
};

export default LeaderboardTable;

// 1. using the effects with schedulers - setInterval(), componentWillUnmount() ??? in hooks?
// --- 5 more mock tests, Capstone project ---> 1-2weeks
// 2. Project with Hooks covering new topics also like Redux, axios, payment integration, deployment etc
// 3. Node js Backend
// 4. MySQL database
// 5. Full Stack Project ----> Your own Front end, Your own Backend API, Project deployment of frontend & backend

// React.js vue.js angularjs nextjs
// java & spring programming python & django programming
