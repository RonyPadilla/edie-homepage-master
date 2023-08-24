import "../style/services.css";
import { BiSolidPencil, BiCode } from "react-icons/bi";
import { MdStorage } from "react-icons/md";

export const Services = () => {
  return (
    <>
      <section className="services">
        <h1 className="h1-services">
          We offer high <br />
          demand services
        </h1>
        <div className="div-services">
          <div className="div-service-info">
            <div className="div-icon" style={{ backgroundColor: "#2D9CDB" }}>
              <BiSolidPencil className="icon" />
            </div>
            <div className="div-service-info-text">
              <h2 className="h2-service-info-text">UI/UX Design</h2>
              <p className="p-service-info-text">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Duis a <br />
                metus ac nulla consequat aliquet <br />
                id quis turpis.
              </p>
              <button className="button-service-info-text">Get started</button>
            </div>
          </div>

          <div className="div-service-info">
            <div className="div-icon" style={{ backgroundColor: "#27AE60" }}>
              <BiCode className="icon" />
            </div>
            <div className="div-service-info-text">
              <h2 className="h2-service-info-text">Front End</h2>
              <p className="p-service-info-text">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Duis a <br />
                metus ac nulla consequat aliquet <br />
                id quis turpis.
              </p>
              <button className="button-service-info-text">Get started</button>
            </div>
          </div>

          <div className="div-service-info">
            <div className="div-icon" style={{ backgroundColor: "#EB5757" }}>
              <MdStorage className="icon" />
            </div>
            <div className="div-service-info-text">
              <h2 className="h2-service-info-text">Back End</h2>
              <p className="p-service-info-text">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Duis a <br />
                metus ac nulla consequat aliquet <br />
                id quis turpis.
              </p>
              <button className="button-service-info-text">Get started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
