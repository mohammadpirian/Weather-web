import El from "../../library/El";

const Container = (child) => {
  return El({
    element: "div",
    className: "w-auto mx-auto",
    child,
  });
};

export default Container;
