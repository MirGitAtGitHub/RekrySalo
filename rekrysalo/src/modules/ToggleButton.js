export const ToggleButton = () => {
    var toggled = false;
  return (
    <div>
        <button className="circle-button" onClick={() => (toggled !== true) ? (toggled = true, console.log(toggled)) : (toggled = false,console.log(toggled))}>!</button>
        <button className="square-button" onClick={() => (toggled !== true) ? (toggled = true, console.log(toggled)) : (toggled = false,console.log(toggled))}>1</button>
    </div>
  )
}
