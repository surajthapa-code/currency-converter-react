import { useContext } from "react";
import userContext from "../context/userContext";
function Profile() {
  const { user } = useContext(userContext);
  if (!user)
    return (
      <>
        <p>please login</p>
      </>
    );

  return (
    <div>
      <h3>welcome: {user.username}</h3>
    </div>
  );
}

export default Profile;
