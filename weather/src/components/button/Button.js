import El from "../../library/El";

const variants = {
  contained:
    "flex justify-center bg-blue-700 text-white-me p-3  rounded-md w-24 hover:bg-blue-600 hover:font-semibold h-10 items-center inline-block rounded-md text-sm py-2 px-6",
  outlined:
    "flex justify-center inline-block border border-1 text-blue-700 w-24 rounded-md  border-blue-700  text-lg h-9 items-center text-sm py-2 px-4",

  link: "flex bg-transparent p-3 hover:bg-gray-100 rounded-md w-20 justify-center text-gray-500 text-xs hover:text-black hover:font-semibold h-10 items-center inline-block rounded-md text-sm py-2 px-6",
  link2:
    "flex bg-transparent p-3 hover:bg-gray-100 rounded-md w-24 justify-center text-gray-500 text-xs hover:text-black hover:font-semibold h-10 items-center inline-block rounded-md text-sm py-2 px-6",
  link3:
    "flex bg-transparent p-3 hover:bg-gray-100 rounded-md w-28 justify-center text-gray-500 text-xs hover:text-black hover:font-semibold h-10 items-center inline-block rounded-md text-sm py-2 px-6",
  link4:
    "flex bg-transparent py-3 hover:bg-gray-100 rounded-md w-32 justify-center text-gray-500 text-xs hover:text-black hover:font-semibold h-10 items-center inline-block rounded-md text-sm py-2 px-6",
};

const Button = ({
  element = "button",
  child,
  variant = "contained",
  ...rest
}) => {
  return El({
    element: element,
    className: `${variants[variant]} `,
    child,
    ...rest,
  });
};

export default Button;
