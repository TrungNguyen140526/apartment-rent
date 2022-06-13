import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";
import "../assets/profile.css";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <>
      <Navbar></Navbar>
      <div class="container emp-profile">
        <form method="post" class="form">
          <div class="row">
            <div class="col-md-2">
              <div class="profile-img">
                <img src={user.photoURL} alt="" class="profile-imgg" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h5>{user.displayName}</h5>
                <h6>Web Developer and Designer</h6>
                <p class="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p>
                <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
                  <li class="nav-item mt-4">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <div class="profile-work mt-4">
                <p>WORK LINK</p>
                <a href="#" class="worklink">
                  GitHub
                </a>
                <br />
                <a href="#" class="worklink">
                  Facebook
                </a>
                <br />
                <a href="#" class="worklink">
                  Zalo
                </a>
                <br />
              </div>
            </div>
            <div class="col-md-5">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <h6>Provider Id: {user.providerId}</h6>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <h6>Name: {user.displayName}</h6>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email: {user.email}</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone: {user.phoneNumber}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
