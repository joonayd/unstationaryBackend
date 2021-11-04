import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import BlankCardHorizontal from "./components/BlankCardHorizontal";
import BlankCardVertical from "./components/BlankCardVertical";
import EditBacksideHorizontal from "./components/EditBacksideHorizontal";
import EditBacksideVertical from "./components/EditBacksideVertical";
import ReviewDesignHorizontal from "./components/ReviewDesignHorizontal";
import ReviewDesignVertical from "./components/ReviewDesignVertical";
import SaveProjectHorizontal from "./components/SaveProjectHorizontal";
import SaveProjectVertical from "./components/SaveProjectVertical";

import SizeSelect from "./components/SizeSelect";
import TopMenu from "./components/TopMenu";
import UploadPhotoHorizontal from "./components/UploadPhotoHorizontal";
import UploadPhotoVertical from "./components/UploadPhotoVertical";
import UploadVideoHorizontal from "./components/UploadVideoHorizontal";
import UploadVideoVertical from "./components/UploadVideoVertical";
import MailingVertical from "./components/MailingVertical";
import MailingHorizontal from "./components/MailingHorizontal";
import LandingPage from "./components/LandingPage";
import WriteTextHorizontal from "./components/WriteTextHorizontal";
import WriteTextVertical from "./components/WriteTextVertical";

function App() {
  return (
    <Router>
      <TopMenu />
      <div>
        <Switch>
          <Route path="/size-select" component={SizeSelect} />
          <Route path="/blank-card-vertical" component={BlankCardVertical} />
          <Route path="/blank-card-horizontal" component={BlankCardHorizontal} />
          <Route path="/upload-photo-vertical" component={UploadPhotoVertical} />
          <Route path="/upload-photo-horizontal" component={UploadPhotoHorizontal} />
          <Route path="/upload-video-vertical" component={UploadVideoVertical} />
          <Route path="/upload-video-horizontal" component={UploadVideoHorizontal} />
          <Route path="/edit-backside-vertical" component={EditBacksideVertical} />
          <Route path="/edit-backside-horizontal" component={EditBacksideHorizontal} />
          <Route path="/review-design-vertical" component={ReviewDesignVertical} />
          <Route path="/review-design-horizontal" component={ReviewDesignHorizontal} />
          <Route path="/save-project-vertical" component={SaveProjectVertical} />
          <Route path="/save-project-horizontal" component={SaveProjectHorizontal} />
          <Route path="/mail-vertical" component={MailingVertical} />
          <Route path="/mail-horizontal" component={MailingHorizontal} />
          <Route path="/signup" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/write-text-horizontal" component={WriteTextHorizontal} />
          <Route path="/write-text-vertical" component={WriteTextVertical} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
