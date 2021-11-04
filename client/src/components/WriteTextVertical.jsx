import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
import { color } from "@mui/system";
import { GrTextAlignFull, GrTextAlignCenter } from "react-icons/gr";

const WriteTextVertical = () => {
  let textColor = "black";

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  function red() {
    document.getElementById("p2").style.color = "red";
  }
  function black() {
    document.getElementById("p2").style.color = "black";
  }
  function darkblue() {
    document.getElementById("p2").style.color = "darkblue";
  }
  function purple() {
    document.getElementById("p2").style.color = "purple";
  }
  function blue() {
    document.getElementById("p2").style.color = "blue";
  }

  function Amatic() {
    document.getElementById("p2").style.fontFamily = "Amatic";
  }
  function Crimson() {
    document.getElementById("p2").style.fontFamily = "Crimson Pro";
  }
  function Source() {
    document.getElementById("p2").style.fontFamily = "Source Serif Pro";
  }
  function Anton() {
    document.getElementById("p2").style.fontFamily = "Anton";
  }
  function Josefin() {
    document.getElementById("p2").style.fontFamily = "Josefin Sans";
  }
  function Libre() {
    document.getElementById("p2").style.fontFamily = "Libre Baskerville";
  }
  function Rubik() {
    document.getElementById("p2").style.fontFamily = "Rubik";
  }
  function Nunito() {
    document.getElementById("p2").style.fontFamily = "Nunito";
  }
  function Courier() {
    document.getElementById("p2").style.fontFamily = "Courier Prime";
  }
  function Align_left() {
    document.getElementById("p2").style.textAlign = "left";
  }
  function Align_center() {
    document.getElementById("p2").style.textAlign = "center";
  }
  return (
    <div>
      <h3 className="upload-card-heading">Choose Backside</h3>
      <section className="upload-photo-sec">
        <div className="blank-card">
          <p id="p2"> {data}</p>
        </div>
        <div className="choose-card-back" style={{ marginTop: "5rem" }}>
          <div className="upload-photo-card-heading">
            <h3>Edit Card Back</h3>
          </div>
          <section className="choose-card-text">
            <img src="../svgIcons/keyboard.svg" alt="" />
            <div className="editor">
              <p>Customize your text below</p>
              <textarea className="card-text-input " type="text" onChange={getData}></textarea>
              <div className="card-font">
                <p>Font</p>

                <DropdownButton id="dropdown-basic-button" title="Select font">
                  <Dropdown.Item
                    onClick={() => {
                      Courier();
                    }}
                  >
                    Courier Prime
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      Nunito();
                    }}
                  >
                    Nunito
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      Rubik();
                    }}
                  >
                    Rubik
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      Libre();
                    }}
                  >
                    Libre Baskerville
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      Josefin();
                    }}
                  >
                    Josefin Sans
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      Anton();
                    }}
                  >
                    Anton
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      Source();
                    }}
                  >
                    Source Serif Pro
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      Amatic();
                    }}
                  >
                    Amatic SC
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      Crimson();
                    }}
                  >
                    Crimson Pro
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <hr />
              <div className="card-font">
                <p>Text Color</p>
                <button
                  onClick={() => {
                    black();
                  }}
                  className="color-btn"
                  style={{ backgroundColor: "black" }}
                ></button>
                <button
                  onClick={() => {
                    darkblue();
                  }}
                  className="color-btn"
                  style={{ backgroundColor: "darkblue" }}
                ></button>
                <button
                  onClick={() => {
                    purple();
                  }}
                  className="color-btn"
                  style={{ backgroundColor: "purple" }}
                ></button>
                <button
                  onClick={() => {
                    red();
                  }}
                  className="color-btn"
                  style={{ backgroundColor: "red" }}
                ></button>
                <button
                  onClick={() => {
                    blue();
                  }}
                  className="color-btn"
                  style={{ backgroundColor: "blue" }}
                ></button>
              </div>
              <hr />
              <div className="card-font">
                <p>Alignment</p>
                <button
                  className="align-button"
                  onClick={() => {
                    Align_left();
                  }}
                >
                  <GrTextAlignFull className="align-icon" />
                </button>
                <button
                  className="align-button"
                  onClick={() => {
                    Align_center();
                  }}
                >
                  <GrTextAlignCenter className="align-icon" />
                </button>
              </div>
            </div>
          </section>
          <Link to="Cardcollor" style={{ width: "100%" }}>
            <button style={{ width: "90%", marginBottom: "1rem" }} className="btn-customize">
              Save and Continue
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WriteTextVertical;
