import El from "../../library/El";

const variants = {
  search:
    "w-96 p-2 bg-purple-input rounded-md hover:bg-slate-200 focus:border-none hover:bg-purple-input-hover",
  search2:
    "w-full p-2 bg-gray-200 rounded-md hover:bg-slate-200 focus:border-none",
};

const Input = ({ element = "input", child, variant = "search", ...rest }) => {
  return El({
    element: element,
    className: `${variants[variant]} `,
    placeholder: "Search",
    type: "text",
    child,
    ...rest,
  });
};
export default Input;
