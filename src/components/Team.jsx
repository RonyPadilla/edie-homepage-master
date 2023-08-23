import "../style/team.css";

export const Team = () => {
  return (
    <>
      <section className="team">
        <div className="div-info-team">
          <p className="p-first-team">Meet the team</p>
          <h1 className="h1-team">We are chilled <br />and a laidback <br />team</h1>
          <p className="p-two-team">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.</p>
        </div>
        <div className="div-imgs-team">
          <div className="div-person-team-1">
            <img className="img-person-team-1"
              src="https://github.com/RonyPadilla/edie-homepage-master/blob/main/src/img/person3.png?raw=true"
              alt=""
            />
          </div>
          <div className="div-person-team-2">
            <img
              className="img-person-team-2"
              src="https://github.com/RonyPadilla/edie-homepage-master/blob/main/src/img/person1.png?raw=true"
              alt=""
            />
          </div>
          <div className="div-person-team-3">
            <img
              className="img-person-team-3"
              src="https://github.com/RonyPadilla/edie-homepage-master/blob/main/src/img/person2.png?raw=true"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
