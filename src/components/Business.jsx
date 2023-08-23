import "../style/business.css";
import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

export const Business = () => {
  const [arrayBusiness, setarrayBusiness] = useState([
    {
      id: 1,
      img: "https://github.com/RonyPadilla/edie-homepage-master/blob/main/src/img/smarthome.jpg?raw=true",
      design: "Full stack application",
      titleOfAplication: "Smart home dashboard",
    },
    {
      id: 2,
      img: "https://github.com/RonyPadilla/edie-homepage-master/blob/main/src/img/onboard.png?raw=true",
      design: "UX/UI design",
      titleOfAplication: "Onboard application",
    },
    {
      id: 3,
      img: "https://github.com/RonyPadilla/edie-homepage-master/blob/main/src/img/booking.png?raw=true",
      design: "Mobile application",
      titleOfAplication: "Booking system",
    },
    {
      id: 4,
      img: "https://github.com/RonyPadilla/edie-homepage-master/blob/main/src/img/juice-product.png?raw=true",
      design: "Front End applicati on",
      titleOfAplication: "Juice product homepage",
    },
  ]);

  return (
    <>
      <section className="business">
        <h1 className="h1-business">
          Good design means <br />
          good business
        </h1>

        <div className="div-container-business">
          {arrayBusiness.map((value) => (
            <div
              key={value.id}
              className={`${
                value.id % 2 === 0
                  ? "div-content-business-impar"
                  : "div-content-business-par"
              }`}
            >
              <div className="div-img-business">
                <img
                  className="img-business"
                  src={`${value.img}`}
                  alt={`img-${value.design}`}
                />
              </div>
              <div className="div-info-business">
                <p className="p-info-business">{`${value.design}`}</p>
                <h2 className="h2-info-business">{`${value.titleOfAplication}`}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="div-seemore-business">
          <a className="seemore-business" href="#">see more </a>
          <MdArrowRightAlt className="icon-business"/>
        </div>
      </section>
    </>
  );
};
