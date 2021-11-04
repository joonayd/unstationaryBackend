import React from "react";
import { Link } from "react-router-dom";

const UploadVideoHorizontal = () => {
  return (
    <div>
      <h3 className="upload-card-heading">Upload Your Own Card</h3>
      <section className="upload-photo-sec">
        <div className="blank-card-horizontal">
          <h3>UPLOAD VIDEO</h3>
          <p>If you didn't upload photo, first frame of the video will would be used.</p>
          <a href="#">Upload now</a>
        </div>
        <div className="upload-photo-card">
          <div className="upload-photo-card-heading">
            <h3>UPLOAD VIDEO</h3>
          </div>
          <p>Upload your video here</p>
          <Link style={{ width: "90%" }} to="/edit-backside-horizontal">
            <button style={{ width: "90%", marginBottom: "1rem" }} className="btn-customize">
              Edit Backside
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UploadVideoHorizontal;
