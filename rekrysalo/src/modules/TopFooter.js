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
              <SquareButton address="" number="1" />
              <SquareButton address="" number="2" />
              <SquareButton address="" number="3" />
              <SquareButton address="" number="4" />
              <SquareButton address="" number="5" />
              <SquareButton address="" number="6" />
              <SquareButton address="" number="Check" />
            </div>
          </div>
      </div>
      </>
  );
}
