import Container from "./layout/Container";
import El from "./library/EL";
import navbar from "./components/navbar/navbar";
import signup from "./components/signup/signup";
import login from "./components/Login/login";

export const App = () => {
  const app = El({
    element: "div",
    className: "flex flex-col",
    innerHTML: [navbar(), signup(), login()],
  });
  return Container(app);
};
