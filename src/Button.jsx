import react from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="px-4 py-2 border text-white border-yellow-500 hover:bg-gray-900 rounded-full"
    >
      {props.children}
    </button>
  );
}
export default Button;
