import Container from "./layout/Container";
import El from "./library/EL";
import navbar from "./components/navbar/navbar";

export const App = () => {
  const app = El({
    element: "div",
    className: "flex flex-col",
    child: [navbar()],
  });
  return Container(app);
};
