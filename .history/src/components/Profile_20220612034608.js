import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";
import './profile.css'

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <>
      <Navbar></Navbar>
      <div className="Card">
        <div className="upper-container">
          <div className="image-container">

          </div>
        </div>
      </div>
    </>
  );
}
