import React from "react";
import { Link } from "react-router-dom";
const SizeSelect = () => {
  return (
    <div>
      <h1 className="heading1">MAKE YOUR OWN CARD</h1>
      <p className="para1">
        A blank canvas for your own photo or design! Just pick the type of card you want to
        customize and get going.
      </p>
      <div className="size-container">
        <div className="vertical">
          <section className="vertical-box"></section>
          <h3>Flat vertical</h3>
          <p>5" x 7"</p>
          <Link to="/blank-card-vertical">
            <button className="btn-customize">Customize</button>
          </Link>
        </div>
        <div className="horizontal">
          <section className="horizontal-box"></section>
          <h3>Flat horizontal</h3>
          <p>7" x 5"</p>
          <Link to="/blank-card-horizontal">
            <button className="btn-customize">Customize</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SizeSelect;
