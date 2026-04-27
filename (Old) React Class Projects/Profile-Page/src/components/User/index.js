import "./index.css";

const User = (props) => {
  const { userInfo } = props;
  return (
    <li className="person-con">
      <img className="person-img" src={userInfo.imageUrl} alt="man-1" />
      <div className="info-con">
        <h3 className="name-heading">{userInfo.name}</h3>
        <p className="job-heading">{userInfo.role}</p>
      </div>
    </li>
  );
};

export default User;
