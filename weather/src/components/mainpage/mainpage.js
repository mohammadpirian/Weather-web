const mainpage = () => {
  return `
  
  <div class="w-screen flex fixed justify-between top-0 items-center">
  <side
    class="dark:bg-gray-700 bg-gray-200 backdrop:blur-sm w-3/12 h-screen top-0 z-10 opacity-80 flex flex-col items-end p-2 justify-between"
  >
    <div class="w-full dark:text-white mt-20">
      <button
        class="w-full p-2 hover:bg-slate-300 dark:hover:bg-slate-500 flex rounded-md"
      >
        <img
          src="src/icon/admin-night.png"
          class="w-7 ml-3 hidden"
          id="icon-1"
          alt=""
        />
        <img src="src/icon/admin.png" class="w-7 ml-3 dark:hidden" alt="" />
        <h2 class="font-thin text-2xl">پنل مدیریت</h2>
      </button>
      <button
        class="w-full p-2 hover:bg-slate-300 flex rounded-md dark:hover:bg-slate-500"
      >
        <img
          src="src/icon/map2-night.png"
          class="w-7 ml-3 hidden"
          id="icon-2"
          alt=""
        />
        <img src="src/icon/map2.png" class="w-7 ml-3 dark:hidden" alt="" />
        <h2 class="font-thin text-2xl">نقشه</h2>
      </button>
      <button
        class="w-full p-2 hover:bg-slate-300 flex rounded-md dark:hover:bg-slate-500"
      >
        <img
          src="src/icon/map-night.png"
          class="w-6 ml-3 hidden"
          id="icon-3"
          alt=""
        />
        <img src="src/icon/map.png" class="w-6 ml-3 dark:hidden" alt="" />
        <h2 class="font-thin text-2xl">مکان های ذخیره شده</h2>
      </button>
      <button
        class="w-full p-2 hover:bg-slate-300 flex rounded-md dark:hover:bg-slate-500"
      >
        <img
          src="src/icon/calendr-night.png"
          class="w-6 ml-3 hidden"
          id="icon-4"
          alt=""
        />
        <img
          src="src/icon/calendr.png"
          class="w-6 ml-3 dark:hidden"
          alt=""
        />
        <h2 class="font-thin text-2xl">تقویم</h2></button
      ><button
        class="w-full p-2 hover:bg-slate-300 flex rounded-md dark:hover:bg-slate-500"
      >
        <img
          src="src/icon/setting-night.png"
          class="w-7 ml-3 hidden"
          id="icon-5"
          alt=""
        />
        <img
          src="src/icon/setting2.png"
          class="w-7 ml-3 dark:hidden"
          alt=""
        />
        <h2 class="font-thin text-2xl">تنظیمات</h2>
      </button>

      <button
        id="openSignupBtn"
        class="w-full p-2 hover:bg-slate-300 flex rounded-md dark:hover:bg-slate-500"
      >
        <img
          src="src/icon/login-night.png"
          class="w-7 ml-3 hidden"
          id="icon-6"
          alt=""
        />
        <img src="src/icon/login.png" class="w-7 ml-3 dark:hidden" alt="" />
        <p class="font-thin text-2xl">ثبت نام</p>
      </button>
      <button
        id="SignoutBtn"
        class="w-full p-2 hover:bg-slate-300 flex rounded-md dark:hover:bg-slate-500 hidden"
      >
        <img
          src="src/icon/logout-night.png"
          class="w-7 ml-3 hidden"
          id="icon-7"
          alt=""
        />
        <img
          src="src/icon/logout.png"
          class="w-7 ml-3 dark:hidden"
          alt=""
        />
        <p class="font-thin text-2xl">خروج</p>
      </button>
    </div>

    <button
      id="theme-toggle"
      type="button"
      class="text-gray-500 w-12 h-12 flex justify-center items-center dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 z-100"
    >
      <svg
        id="theme-toggle-dark-icon"
        class="hidden w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        ></path>
      </svg>
      <svg
        id="theme-toggle-light-icon"
        class="hidden w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </side>

  <div id="middle-main"
    class="card dark:bg-gray-700 bg-gray-200 opacity-80 w-4/12 flex flex-col justify-center items-center text-center gap-8 dark:text-white rounded-2xl p-8"
  >
    <div class="weather flex flex-col gap-12">
      <h2 class="city">weather in tehran</h2>
      <div class="flex items-center gap-4">
        <div class="temp font-bold text-3xl">51°C</div>
        <img src="" alt="" class="icon" />
      </div>

      <div class="description">Cloudy</div>
      <div class="humidity">Humidity 60%</div>
      <div class="wind">Wind speed: 6.2 km/h</div>
    </div>
  </div>

  <side id="left-main"
    class="flex flex-col h-screen w-3/12 dark:bg-gray-700 bg-gray-200 opacity-80 z-10 gap-12"
  >
    <div
      class="card1 dark:bg-gray-700 bg-slate-200 w-full text-center gap-2 dark:text-white p-2 mt-20 hover:bg-slate-300 dark:hover:bg-slate-500"
    >
      <div class="weather1 flex items-center gap-2">
        <h2 class="city1">tehran</h2>

        <div class="temp1 font-bold text-3xl">51°C</div>
        <img src="" alt="" class="icon1" />

        <div class="description1">description:few clouds</div>
        <div class="humidity1">Humidity 60%</div>
      </div>
    </div>

    <div
      class="card2 dark:bg-gray-700 bg-slate-200 w-full text-center gap-2 dark:text-white hover:bg-slate-300 p-2 dark:hover:bg-slate-500"
    >
      <div class="weather2 flex items-center gap-2">
        <h2 class="city2">tehran</h2>
        <div class="temp2 font-bold text-3xl">51°C</div>
        <img src="" alt="" class="icon2" />
        <div class="description2">description:few clouds</div>
        <div class="humidity2">Humidity 60%</div>
      </div>
    </div>

    <div
      class="card3 dark:bg-gray-700 bg-slate-200 w-full text-center gap-2 dark:text-white hover:bg-slate-300 p-2 dark:hover:bg-slate-500"
    >
      <div class="weather3 flex items-center gap-2">
        <h2 class="city3">tehran</h2>
        <div class="temp3 font-bold text-3xl">51°C</div>
        <img src="" alt="" class="icon3" />
        <div class="description3">description:few clouds</div>
        <div class="humidity3">Humidity 60%</div>
      </div>
    </div>

    <div
      class="card4 dark:bg-gray-700 bg-slate-200 w-full text-center gap-2 dark:text-white hover:bg-slate-300 p-2 dark:hover:bg-slate-500"
    >
      <div class="weather4 flex items-center gap-2">
        <h2 class="city4">tehran</h2>
        <div class="temp4 font-bold text-3xl">51°C</div>
        <img src="" alt="" class="icon4" />
        <div class="description4">description:few clouds</div>
        <div class="humidity4">Humidity 60%</div>
      </div>
    </div>

    <div
      class="card5 dark:bg-gray-700 bg-slate-200 w-full text-center gap-2 dark:text-white hover:bg-slate-300 p-2 dark:hover:bg-slate-500"
    >
      <div class="weather5 flex items-center gap-2">
        <h2 class="city5">tehran</h2>
        <div class="temp5 font-bold text-3xl">51°C</div>
        <img src="" alt="" class="icon5" />
        <div class="description5">description:few clouds</div>
        <div class="humidity5">Humidity 60%</div>
      </div>
    </div>
  </side>
</div>`;
};
export default mainpage;
