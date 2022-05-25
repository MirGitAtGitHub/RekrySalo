export const SquareButton = (props) => {
  return (
      <a href={props.address}><div className="square-button">{props.number}</div></a>
  );
}
