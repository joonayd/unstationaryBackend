import logo from "./assets/logo.png";
import mail from "./assets/mail.png";
import mobile from "./assets/mobile.png";
import mobile2 from "./assets/mobile2.png";
import mobile3 from "./assets/mobile3.png";
import card from "./assets/card.png";
import cloud from "./assets/cloud.png";
import ship from "./assets/ship.png";
import vedio from "./assets/vedio.PNG";
import "bootstrap/dist/css/bootstrap.min.css";
import { Player } from "video-react";
import "../LandingPage.css";

import { Button, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <div className="mail">
        <div>
          <h1 className="mail-font">Mail is Boring</h1>
          <h2 className="mail-here">We're here to change that</h2>
          <Link to="/size-select">
            <Button className="mail-button" variant="warning">
              Upload your own card
            </Button>
          </Link>
        </div>

        <div>
          <img className="mail-img" src={mail} alt="Mail" />
        </div>
      </div>

      <div className="vedio">
        <div className="vedio-text">
          <h3 className="vedio-text">MORE MEMORABLE MAIL</h3>
          <h1 className="vedio-text2">Send a postcard that comes to life.</h1>
        </div>
        <div>
          <img className="vedio-img " src={vedio} alt="Logo" />
        </div>
      </div>

      <div>
        <div className="mobile">
          <div className="mobile-center">
            <h2 className="mobile1">MOVING STATIONERY</h2>
            <h1 className="mobile2">Create & send beautiful cards</h1>
            <h1 className="mobile3">
              Create & ship high-quality augmented reality cards in just a few clicks.
            </h1>
          </div>

          <div>
            <Container className="mobile-container">
              <img className="mobile-img2" src={mobile} alt="Logo" />
            </Container>
          </div>
        </div>

        <div className="mobile">
          <div>
            <Container className="mobile-container">
              <img className="mobile-img" src={mobile2} alt="Logo" />
            </Container>
          </div>

          <div className="mobile-center">
            <h2 className="mobile1">APP-LESS</h2>
            <h1 className="mobile2">Nobody likes downloading apps</h1>
            <h1 className="mobile3">
              So all of our mixed reality experiences can be viewed by scanning a QR code.
            </h1>
          </div>
        </div>

        <div className="mobile">
          <div className="mobile-center">
            <h2 className="mobile1">THE FUTURE OF ADVERTISMENT</h2>
            <h1 className="mobile2">Make a lasting impression</h1>
            <h1 className="mobile3">Unstationery campaigns are more compelling.</h1>
          </div>

          <div>
            <Container className="mobile-container">
              <img className="mobile-img" src={mobile3} alt="Logo" />
            </Container>
          </div>
        </div>

        <div className="mobile-footer">
          <div className="mobile-div">
            <img className="mobile-value" src={card} alt="card" />
            <h1 className="mobile-footer-img ">Pick a card</h1>
            <h1 className="mobile3">Choose a card from our library of templates</h1>
          </div>

          <div className="mobile-div">
            <img className="mobile-value" src={cloud} alt="cloud" />
            <h1 className="mobile-footer-img ">Upload a video</h1>
            <h1 className="mobile3">Upload a video for the AR experience</h1>
          </div>

          <div className="mobile-div">
            <img className="mobile-value" src={ship} alt="ship" />
            <h1 className="mobile-footer-img ">Ship!</h1>
            <h1 className="mobile3">Tell us where to ship. We'll do the rest.</h1>
          </div>
        </div>
      </div>

      <div className="end ">
        <Container style={{ background: "transparent" }}>
          <h1 className="mobile2">Get Early Access</h1>
          <h3 className="mobile3">Unstationery news + early access to the site</h3>
          <Button className="end-button" size="lg" active>
            Upload your own card
          </Button>
        </Container>
      </div>

      <div className="footer">
        <img className="footer-img " src={logo} alt="Logo" />
        <h1 className="email"> email</h1>
      </div>
    </div>
  );
}

export default LandingPage;
