export const CircleButton = (props) => {
  return (
      <a href="" style={{pointerEvents: props.pointerevents}}><div className="circle-button">{props.text}</div></a>
  );
}
