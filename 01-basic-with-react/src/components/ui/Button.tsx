import {MouseEventHandler} from "react";
import {FaDownload} from "react-icons/fa";

export const Button = ({handler}: {handler: MouseEventHandler}) => {
  return (
    <button
      onClick={handler}
      className="absolute top-5 right-5 bg-emerald-600 text-white text-sm font-sans h-8 px-4 rounded-md inline-flex items-center justify-center gap-1.5"
    >
      <FaDownload className="text-xs" />
      <span>Download PDF</span>
    </button>
  );
};
