export const SquareButton = (props) => {
  return (
      <a href={props.address}><div className="square-button"><p className="square-button-number">{props.number}<br></br>{props.text}</p></div></a>
  );
}
