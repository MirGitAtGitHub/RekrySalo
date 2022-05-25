export const SquareButton = (props) => {
  return (
      <a href={props.address}><div className="square-button"><p className="square-button-text">{props.number}</p></div></a>
  );
}
