import {SquareButton} from "./SquareButton";
import {Link} from "react-router-dom";
export const TopFooter = (props) => {
  return (
      <>
      <div className="top-header-container">
          <h1 className="top-header-header">{props.text}</h1>
          <div className="top-header-space">
            <div className="top-navigation">
              <div></div>
              <SquareButton address="" number="Home" />
              
              <div className={(props.current === "1") ? "box-current" : "box"}>
                <Link to="/Page1">
                  <h1 className="hed">1</h1>
                  <p className="smol2">{"Osaamisen tarve"}</p>
                </Link>
              </div>

              <div className={(props.current === "2") ? "box-current" : "box"}>
                <Link to="/Page2">
                  <h1 className="hed">2</h1>
                  <p className="smol2">{"Työpaikka- ilmoitus"}</p>
                </Link>
              </div>

              <div className={(props.current === "3") ? "box-current" : "box"}>
                <Link to="/Page3">
                  <h1 className="hed">3</h1>
                  <p className="smol2">{"Hakemusten käsittely"}</p>
                </Link>
              </div>

              <div className={(props.current === "4") ? "box-current" : "box"}>
                <Link to="/Page4">
                  <h1 className="hed">4</h1>
                  <p className="smol">{"Haastattelu"}</p>
                </Link>
              </div>

              <div className={(props.current === "5") ? "box-current" : "box"}>
                <Link to="/Page5">
                  <h1 className="hed">5</h1>
                  <p className="smol">{"Sopimus"}</p>
                </Link>
              </div>

              <div className={(props.current === "6") ? "box-current" : "box"}>
                <Link to="/Page6">
                  <h1 className="hed">6</h1>
                  <p className="smol">{"Perehdytys"}</p>
                </Link>
              </div>

              <SquareButton address="" number="Check" />
            </div>
          </div>
      </div>
      </>
  );
}
