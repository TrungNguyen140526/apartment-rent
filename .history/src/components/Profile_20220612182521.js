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
      <div class="container emp-profile">
        <form method="post" class="form">
          <div class="row">
            <div class="col-md-2">
              <div class="profile-img">
                <img src={user.photoURL} alt="" class="profile-imgg"/>
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
                  <li class="nav-item">
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
              <div class="profile-work mt-2">
                <p>WORK LINK</p>
                <a href="#" class="worklink">GitHub</a>
                <br />
                <a href="#" class="worklink">Facebook</a>
                <br />
                <a href="#" class="worklink">Zalo</a>
                <br />
              </div>
            </div>
            <div class="col-md-4">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Provider Id:</label>
                    </div>
                    <div class="col-md-6">
                      <p>{user.providerId}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name:</label>
                    </div>
                    <div class="col-md-6">
                      <p>
                        {user.displayName}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email:</label>
                    </div>
                    <div class="col-md-6">
                      <p>{user.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone:</label>
                    </div>
                    <div class="col-md-6">
                      <p>123 456 7890</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Profession:</label>
                    </div>
                    <div class="col-md-6">
                      <p>Web Developer and Designer</p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div class="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div class="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div class="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div class="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div class="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label>Your Bio</label>
                      <br />
                      <p>Your detail description</p>
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
