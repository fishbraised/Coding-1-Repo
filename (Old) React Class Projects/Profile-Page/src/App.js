import "./App.css";
import User from "./components/User";

const profileDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://img.freepik.com/free-icon/man_318-233556.jpg",
    name: "John McDoe",
    role: "Sr. Software Engineer",
  },
  {
    uniqueNo: 2,
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/77/38/04/360_F_577380416_94uavP658eMEJve8JhMhsvG4bh7mqlDJ.jpg",
    name: "Stacey Michaels",
    role: "Sr. UX Engineer",
  },
  {
    uniqueNo: 3,
    imageUrl:
      "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
    name: "Michael Deeley",
    role: "Director of Operations",
  },
  {
    uniqueNo: 4,
    imageUrl:
      "https://img.freepik.com/premium-vector/young-man-wearing-smart-glass-vector-illustration_107173-16887.jpg?w=360",
    name: "Rajan Krishnan",
    role: "Director of Sales (APAC)",
  },
];

const App = () => (
  <div className="main-con">
    <h1 className="main-heading">Profile List</h1>
    <ul className="profile-con">
      {profileDetailsList.map((eachItem) => (
        <User userInfo={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
);

export default App;
