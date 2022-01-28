import react from "react";
import '../../style/components/user/UserCard.scss'

const UserCard = (props) => {
  const {
    user: { firstName, lastName, image },
  } = props;
  return (
    <div className="user-card">
      <img src={image} alt={firstName} />
      <h2>
        {firstName}
        {lastName}
      </h2>
    </div>
  );
};

export default UserCard
