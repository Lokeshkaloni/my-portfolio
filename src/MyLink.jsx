import react from "react";
import { Link } from "react-router-dom";

function MyLink(props) {
  return (
    <Link
      className="text-white border-yellow-500 hover:bg-yellow-400 bg-yellow-500 rounded-full p-1"
      to={props.to}
    >
      {props.children}
    </Link>
  );
}
export default MyLink;
