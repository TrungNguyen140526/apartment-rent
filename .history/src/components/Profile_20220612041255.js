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
            <img src="https://store-images.s-microsoft.com/image/apps.28411.13510798887593857.411c7070-8254-4bc7-9822-93212e9b3eaa.d5650289-0ad1-4560-ac30-38a18a1847bb" alt="" height="100px" width="100px" />
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
