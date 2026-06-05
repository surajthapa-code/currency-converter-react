import { useState, useContext } from "react";
import userContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(userContext);

  function handleClick(e) {
    e.preventDefault();
    setUser({ username, password });
  }
  return (
    <div>
      <h2>login</h2>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="username"
      />
      <input
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;
