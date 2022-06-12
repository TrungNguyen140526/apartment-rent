import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";
import p

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <>
      <Navbar></Navbar>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={user.photoURL} alt="profile" />
            </div>
            <div className="col-md-6">
              <div className="prifle-head">
                <h5>{user.displayName}</h5>
                <h6>Web developer</h6>
                <p className="profile-rating mt-3 mb-5"></p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
