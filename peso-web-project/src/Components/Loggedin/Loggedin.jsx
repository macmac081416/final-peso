import React from "react";
import "./Loggedin.css";
import Card from "../Card/Card.jsx";
import { useState } from "react";
import profile from "../image/logo.png";
import {database} from "../../Utils/database";









const LoginForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Invalid Email",
    password: "Invalid password",
    noUsername: "Please enter your Email",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!username) {
      // Username input is empty
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    // Search for user credentials
    const currentUser = database.find((user) => user.username === username);

    if (currentUser) {
      if (currentUser.password !== password) {
        // Wrong password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        // Correct password, log in user
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      // Username doens't exist in the database
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );


return (
<div className="loginContainer">
<Card>
<div className="imgs">
<div className="container-image">
<img src={profile} alt="profile" className="profile"/>
</div>
</div>
<select alt="please select" className="selection input_container">

<option value="option-1">Agency</option>
<option value="option-2">Peso Manager</option>
</select>
<p className="subtitleTwo">Please log-in using your username and password!</p>
<form onSubmit={handleSubmit}>
<div className="input_container">
<input type="text" placeholder="Email" className="inputOne" value={username} onChange={(e) => setUsername(e.target.value) }/>

{renderErrorMsg("username")}
{renderErrorMsg("noUsername")}

<input type="password" placeholder="Password" className="inputTwo" value={password} onChange={(e) => setPassword(e.target.value) }/>

{renderErrorMsg("password")}
{renderErrorMsg("noPassword")}

</div>
<input type="submit" value="Log In" className="login-button"/>
</form>
<div className="link_containerOne">
<a href="#">Forgot Password</a>
</div>
<div className="link_containerTwo">
  <a href="#">Sign-Up</a>
</div>
</Card>
</div>);

};



export default LoginForm;