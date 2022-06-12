import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <>
      <div className="container ">
        <Navbar></Navbar>
      </div>
    </>
  );
}
