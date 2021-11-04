import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const UploadPhotoVertical = () => {
  const [fileName, setFileName] = React.useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("frontImage", fileName);

    axios
      .post("/cards/add", formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3 className="upload-card-heading">Upload Your Own Card</h3>
      <section className="upload-photo-sec">
        <div className="blank-card">
          <h3>UPLOAD PHOTO</h3>
          <p>Recommended size is 5.25" x 7.25"</p>
          <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div>
              <label htmlFor="file">Choose Image</label>
              <input type="file" filename="frontImage" onChange={onChangeFile} />
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
        <div className="upload-photo-card">
          <div className="upload-photo-card-heading">
            <h3>UPLOAD PHOTO</h3>
          </div>
          <p>Upload your photo here</p>
          <Link style={{ width: "90%" }} to="/upload-video-vertical">
            <button style={{ width: "90%", marginBottom: "1rem" }} className="btn-customize">
              Create card
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UploadPhotoVertical;
