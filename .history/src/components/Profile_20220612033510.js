import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <>
      <div className="container emp-profile">
        <Navbar></Navbar>
        <form method="">
          <div className="row">
            <div>
              
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
