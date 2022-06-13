import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";
import "./profile.css";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [job, setJob] = React.useState('Job Title');
  const [about, setAbout] = React.useState('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');

  return (
    <div className="Profile">
      <Navbar></Navbar>
      <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img src={user.photoURL} alt="" height="100px" width="100px" />
          </div>
        </div>

        <div className="lower-container">
          <h3>{user.displayName}</h3>
          <h4>{user.providerId}</h4>
          <h5>{}</h5>
        </div>
      </div>
    </div>
  );
}
