import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";
import "./profile.css";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <>
    <Navbar></Navbar>
    <div className="Profile">
      
      <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img src="" alt="" height="100px" width="100px" />
          </div>
        </div>

        <div className="lower-container">
          <h3>{user.displayName}</h3>
          <h4>{user.providerId}</h4>
          <h5>{user.email}</h5>
        </div>
      </div>
    </div>
    </>
  );
}
