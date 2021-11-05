import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const UploadPhotoVertical = () => {
  const [fileName, setFileName] = React.useState("");
  const [previewImage, setPreviewImage] = React.useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
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
          <div className="safe-area">
            {previewImage && (
              <div>
                <TransformWrapper>
                  <TransformComponent>
                    <img className="preview" src={previewImage} alt="" />
                  </TransformComponent>
                </TransformWrapper>
              </div>
            )}
          </div>

          {!previewImage && (
            <>
              <h3>UPLOAD PHOTO</h3>
              <p>Recommended size is 5.25" x 7.25"</p>
            </>
          )}
          <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="upload-form">
              {/* <label htmlFor="file">Choose Image</label> */}
              <input
                style={{ marginTop: "1rem" }}
                // accept="image/*"
                type="file"
                filename="frontImage"
                onChange={onChangeFile}
              />
              <button
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
                className="btn btn-primary"
                type="submit"
              >
                submit
              </button>
            </div>
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
