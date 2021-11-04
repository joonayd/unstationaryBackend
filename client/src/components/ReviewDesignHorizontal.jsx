import React from "react";
import { Link } from "react-router-dom";

const ReviewDesignHorizontal = () => {
  return (
    <div>
      <h3 className="upload-card-heading">Review Design</h3>
      <section className="upload-photo-sec">
        <div className="blank-card-horizontal"></div>
        <div className="upload-photo-card">
          <div className="upload-photo-card-heading">
            <h3>REVIEW CARD DESIGN</h3>
          </div>
          <p>
            Please take a minute to review the front and back of your card. We print exactly what
            you see here. If it looks good, let’s continue.
          </p>
          <Link to="/save-project-horizontal" style={{ width: "90%" }}>
            <button style={{ width: "90%", marginBottom: "1rem" }} className="btn-customize">
              Design looks good
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReviewDesignHorizontal;
