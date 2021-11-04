import React from "react";
import { Link } from "react-router-dom";

const BlankCardHorizontal = () => {
  return (
    <div>
      <div className="upload-cards">
        <a href="/size-select">&lt; Upload Your Own Cards</a>
      </div>
      <section className="blank-card-sec">
        <div className="blank-card-horizontal">
          <h3>BLANK FLAT CARD</h3>
          <p>Upload your own photo or design</p>
        </div>
        <div className="customize-card">
          <div className="card-top1">
            <h3>CUSTOM FLAT HORIZONTAL</h3>
            <p>By Postable</p>
          </div>
          <hr />
          <div className="card-top2">
            <p>Flat Cards $1.00 - $3.99</p>
            <a href="">View price tiers</a>
          </div>
          <hr />
          <div className="card-top3">
            <h4>No hidden pricing!</h4>
            <p>Free envelopes, free addressing & mailing, plus all of our cards are recycled.</p>
          </div>
          <Link to="/upload-photo-horizontal">
            <button style={{ width: "90%" }} className="btn-customize">
              Customize card
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlankCardHorizontal;
