const login = () => {
  return `<div
  id="loginForm"
  class="w-full h-full flex justify-center items-center backdrop-blur absolute top-0 z-20 hidden"
  >
  <div
  id="modalLogin"
    class="flex z-10 justify-center items-center w-7/12 bg-gray-100 shadow-lg rounded-lg"
  >
    <div class="w-1/2">
      <img
        src="src/img/pexels-erik-schereder-5930022.jpg"
        class="rounded-r-lg h-[40rem]"
        alt=""
      />
    </div>
    <div class="w-1/2">
      <form action="" class="flex flex-col w-full p-4 gap-2">
        <label for="">نام کاربری:</label>
        <input
          type="text"
          class="p-2 w-full rounded-md shadow"
          placeholder="لطفا نام کاربری خود را وارد کنید"
        />
        <label for="">رمز عبور:</label>
        <input
          type="password"
          class="p-2 w-full rounded-md shadow"
          placeholder="لطفا رمز عبور خود را وارد کنید"
        />
        <button
          type="submit"
          class="bg-cyan-700 p-2 rounded-lg text-white mt-6 shadow-lg hover:bg-cyan-800"
        >
          ثبت نام
        </button>
      </form>
      
    </div>
  </div>
  </div>`;
};
export default login;
