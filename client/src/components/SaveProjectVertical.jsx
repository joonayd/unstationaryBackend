import React from "react";
import { Link } from "react-router-dom";

const SaveProjectVertical = () => {
  return (
    <div>
      <h3 className="upload-card-heading">Save </h3>
      <section className="upload-photo-sec">
        <div className="blank-card"></div>
        <div style={{ marginTop: "8rem" }} className="upload-photo-card">
          <div className="upload-photo-card-heading">
            <h3>SAVE PROJECT</h3>
          </div>
          <img src="../../svgIcons/thumbsup.svg" alt="" />
          <p>Beautiful! Now just name this project so you can find it later.</p>
          <input type="text" placeholder="Name this project" />
          <Link to="/mail-vertical" style={{ width: "90%" }}>
            <button style={{ width: "90%", marginBottom: "1rem" }} className="btn-customize">
              Save and continue
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SaveProjectVertical;
