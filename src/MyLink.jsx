import react from "react";
import { Link } from "react-router-dom";

function MyLink(props) {
  return (
    <Link
      className="items-center flex justify-center text-white border-yellow-500 hover:bg-yellow-400 bg-yellow-500 rounded-full p-2 h-10 w-10"
      to={props.to}
    >
      {props.children}
    </Link>
  );
}
export default MyLink;
