import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";

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
                <h5>{user.}</h5>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
