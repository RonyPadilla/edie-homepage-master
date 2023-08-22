import "../style/nav.css";

const Nav = () => {
  return (
    <>
        <nav className="nav">
          <div className="div-a">
            <a className="a-edie" href="#">Edie</a>
          </div>

          <div className="div-list-nav">
            <ul className="list-nav">
              <li className="list-a">
                <a className="a-list-nav" href="#">Home</a>
              </li>
              <li className="list-a">
                <a className="a-list-nav" href="#">Services</a>
              </li>
              <li className="list-a">
                <a className="a-list-nav" href="#">Our Works</a>
              </li>
              <li className="list-a">
                <a className="a-list-nav" href="#">Clients</a>
              </li>
              <li className="list-a">
                <a className="a-list-nav" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
};

export default Nav;
