import "../style/nav.css";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {

  const ancho = window.innerWidth;
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  function changeNav() {
    console.log(ancho);
    if (ancho <= 770) {
      return (<header>
        <nav className="nav">
        <div className="div-a">
              <a className="a-edie" href="#">Edie</a>
            </div>          
          <BiMenu className="BiMenu" onClick={handleExpand}/>
          {expanded==true?<section className="section-nav-response">
            <BiX className="Bix" onClick={handleExpand}/>
            <ul className="ul-link">
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
          </section>:null
          }
        </nav>
      </header>)

    }else {
        return (
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
      
        );
      }
    }
  
    return <>{changeNav()}</>;
};

export default Nav;
