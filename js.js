//declare var//
const sidebar = document.getElementById("sidebar");
const btnClose = document.getElementById("close");
const btnOpen = document.getElementById("open");
const btnLight = document.getElementById("light-mode");
const btnDark = document.getElementById("dark-mode");
const listSidebar = document.querySelectorAll("#sidebar a");
const timer = document.getElementById("time");

// sidebar open and close//
const sidebarOpen = () => {
  sidebar.style.display = "block";
  btnClose.style.display = "block";
  btnOpen.style.display = "none";
};

const sidebarClose = () => {
  sidebar.style.display = "none";
  btnClose.style.display = "none";
  btnOpen.style.display = "block";
};

//dark mode light mode function //
const enableLightMode = () => {
  document.body.style.background = "#f5f5f5";
  sidebar.style.background = "#e1e9ee";
  btnLight.style.color = "#0077b5";
  btnDark.style.color = "#fff";
  timer.style.color = "#000";

  for (let i = 0; i < listSidebar.length; i++) {
    listSidebar[i].style.color = "#000";
  }
};

const enableDarkMode = () => {
  document.body.style.background = "#e1e9ee";
  sidebar.style.background = "#283e4a";
  btnLight.style.color = "#0077b5";
  btnDark.style.color = "#fff";
  timer.style.color = "#fff";

  for (let i = 0; i < listSidebar.length; i++) {
    listSidebar[i].style.color = "#fff";
  }
};

//eventlistener//
btnOpen.addEventListener("click", sidebarOpen);
btnClose.addEventListener("click", sidebarClose);
btnLight.addEventListener("click", enableLightMode);
btnDark.addEventListener("click", enableDarkMode);

// time update //
setInterval(() => {
  const time = new Date();
  let seconds = time.getSeconds().toString().padStart(2, "0");
  let minutes = time.getMinutes().toString().padStart(2, "0");
  let hours = time.getHours();
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  let day = days[time.getDay()];

  //   if (seconds == 0 || seconds < 10) seconds = `0${seconds}`;
  //   if (minutes == 0 || minutes < 10) minutes = `0${minutes}`;

  //   const timer = document.getElementById("time");
  timer.innerHTML = `${day} , ${hours} : ${minutes} : ${seconds}`;
}, 1000);

function changeActive(index) {
  const listItems = document.querySelectorAll(".menu-group li");
  listItems.forEach((item, i) => item.classList.toggle("active", i === index));
}

// document.getElementsByTagName("li");
// for (let i = 0; i < list.length; i++) {
//     list[i].className = "";
//     list[value].className = "active";
// }
