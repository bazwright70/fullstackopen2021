
const Header = (props) => {
  console.log("Header Props: " + props.toString());
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

export default Header;