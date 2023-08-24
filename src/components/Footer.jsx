import "../style/footer.css";
import { ImInstagram, ImLinkedin } from "react-icons/im";
import { AiFillTwitterSquare } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="div-footer-contact">
          <div>
            <ul>
              <li className="li-footer-link">
                <a className="footer-link" href="#">
                  Home
                </a>
              </li>
              <li className="li-footer-link">
                <a className="footer-link" href="#">
                  Services
                </a>
              </li>
              <li className="li-footer-link">
                <a className="footer-link" href="#">
                  Our Works
                </a>
              </li>
              <li className="li-footer-link">
                <a className="footer-link" href="#">
                  Clients
                </a>
              </li>
              <li className="li-footer-link">
                <a className="footer-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="div-icon-footer">
            <h2 className="div-h2-icon">Edie</h2>
            <div className="div-footer-icon">
              <ImInstagram className="footer-icon-1" />
              <ImLinkedin className="footer-icon-2" />
              <AiFillTwitterSquare className="footer-icon-3" />
            </div>
          </div>

          <div>
            <label className="label-div-footer">Want us to contact you?</label>
            <div className="input-button-div-footer">
              <input
                className="input-div-footer"
                type="text"
                placeholder="Email"
              />
              <button className="button-div-footer">Join</button>
            </div>
          </div>
        </div>

        <div className="div-credits-footer">
          <p className="credits">
            created by -<a href="https://github.com/RonyPadilla">RonyPadilla</a>{" "}
            - devChallenges.io
          </p>
        </div>
      </footer>
    </>
  );
};
