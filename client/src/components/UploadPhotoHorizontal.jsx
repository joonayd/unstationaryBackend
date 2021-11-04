import React from "react";
import { Link } from "react-router-dom";

const UploadPhotoHorizontal = () => {
  return (
    <div>
      <h3 className="upload-card-heading">Upload Your Own Card</h3>
      <section className="upload-photo-sec">
        <div className="blank-card-horizontal">
          <h3>UPLOAD PHOTO</h3>
          <p>Recommended size is 5.25" x 7.25"</p>
          <a href="#">Upload now</a>
        </div>
        <div className="upload-photo-card">
          <div className="upload-photo-card-heading">
            <h3>UPLOAD PHOTO</h3>
          </div>
          <p>Upload your photo here</p>
          <Link style={{ width: "90%" }} to="/upload-video-horizontal">
            <button style={{ width: "90%", marginBottom: "1rem" }} className="btn-customize">
              Create card
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UploadPhotoHorizontal;
