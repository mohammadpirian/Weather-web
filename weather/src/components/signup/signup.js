// import El from "../../library/El";

// const login = () => {
//   return El({
//     element: "div",
//     className:
//       "w-full h-full flex justify-center items-center backdrop-blur absolute top-0",
//     child: [
//       El({
//         element: "div",
//         className:
//           "flex justify-center items-center w-7/12 bg-gray-100 shadow-lg rounded-lg",
//         child: [
//           El({
//             element: "div",
//             className: "w-1/2",
//             child: [
//               El({
//                 element()
//               })
//             ],
//           }),
//           El({
//             element: "div",
//             className: "w-1/2",
//             child: [],
//           }),
//         ],
//       }),
//     ],
//   });
// };
// export default login;
const signup = () => {
  return `<div
  id="signupForm"
  class="w-full h-full flex justify-center items-center backdrop-blur absolute top-0 z-50 hidden"
  >
  <div
  id="modalSignup"
    class="flex z-30 justify-center items-center w-7/12 bg-gray-100 shadow-lg rounded-lg"
  >
    <div class="w-1/2">
      <img
        src="src/img/pexels-erik-schereder-5930022.jpg"
        class="rounded-r-lg h-[40rem]"
        alt=""
      />
    </div>
    <div class="w-1/2">
      <form action="" class="flex flex-col w-full p-4 gap-2" id="signForm">
        <label for="">نام:</label>
        <input
          type="text"
          class="p-2 w-full rounded-md shadow"
          placeholder="لطفا نام خود را وارد کنید"
          name="name"
        />
        <label for="">نام خانوادگی:</label>
        <input
          type="text"
          class="p-2 w-full rounded-md shadow"
          placeholder="لطفا نام خانوادگی خود را وارد کنید"
          name="lastname"
        />
        <label for="">ایمیل:</label>
        <input
          type="text"
          class="p-2 w-full rounded-md shadow"
          placeholder="لطفا ایمیل خود را وارد کنید"
          name="email"
        />
        <label for="">نام کاربری:</label>
        <input
          type="text"
          class="p-2 w-full rounded-md shadow"
          placeholder="لطفا نام کاربری خود را وارد کنید"
          name="username"
        />
        <label for="">رمز عبور:</label>
          <input
            type="password"
            class="p-2 w-full rounded-md shadow"
            placeholder="لطفا رمز عبور خود را وارد کنید"
            name="password"
          />
        <button
          type="submit"
          class="bg-cyan-700 p-2 rounded-lg text-white mt-6 shadow-lg hover:bg-cyan-800"
        >
          ثبت نام
        </button>
      </form>
      <p class="text-gray-600 text-center mt-20">
        آیا قبلا ثبت نام کرده اید؟<button
        id="openLoginBtn"
          class="font-semibold text-md text-cyan-800"
        >
          ورود
        </button>
      </p>
    </div>
  </div>
  </div>`;
};
export default signup;
