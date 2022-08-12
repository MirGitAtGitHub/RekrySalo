import {SquareButton} from "./SquareButton";
export const TopFooter = (props) => {
  return (
      <>
      <div className="top-header-container">
          <h1 className="top-header-header">{props.text}</h1>
          <div className="top-header-space">
            <div className="top-navigation">
              <div></div>
              <SquareButton address="" number="Home" />
              
              <div className="box-current">
                <a href="https://www.youtube.com" target="_blank">
                  <h1 className="hed">1</h1>
                  <p className="smol2">{"Osaamisen tarve"}</p>
                </a>
              </div>

              <div className="box">
                <a href="https://www.youtube.com">
                  <h1 className="hed">2</h1>
                  <p className="smol2">{"Työpaikka- ilmoitus"}</p>
                </a>
              </div>

              <div className="box">
                <a href="https://www.youtube.com">
                  <h1 className="hed">3</h1>
                  <p className="smol2">{"Hakemusten käsittely"}</p>
                </a>
              </div>

              <div className="box">
                <a href="https://www.youtube.com">
                  <h1 className="hed">4</h1>
                  <p className="smol">{"Haastattelu"}</p>
                </a>
              </div>

              <div className="box">
                <a href="https://www.youtube.com">
                  <h1 className="hed">5</h1>
                  <p className="smol">{"Sopimus"}</p>
                </a>
              </div>

              <div className="box">
                <a href="https://www.youtube.com">
                  <h1 className="hed">6</h1>
                  <p className="smol">{"Perehdys"}</p>
                </a>
              </div>

              <SquareButton address="" number="Check" />
            </div>
          </div>
      </div>
      </>
  );
}
