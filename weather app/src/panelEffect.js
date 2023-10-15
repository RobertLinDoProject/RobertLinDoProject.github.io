import { fetchAllData } from "../app.js";
const panels = document.querySelectorAll(".panel");
const panel_active = document.querySelector(".active");
let clouds = document.createElement("h3");
let temp = document.createElement("h3");
let temp_max = document.createElement("h3");
let temp_min = document.createElement("h3");
let pressure = document.createElement("h3");
let humidity = document.createElement("h3");
let feels_like = document.createElement("h3");
let visibility = document.createElement("h3");
let description = document.createElement("h3");
let speed = document.createElement("h3");
let deg = document.createElement("h3");
let rain = document.createElement("h3");
let allDataPara = [
  clouds,
  temp,
  temp_max,
  temp_min,
  pressure,
  humidity,
  feels_like,
  visibility,
  description,
  speed,
  deg,
  rain,
];
async function data() {
  let data = await fetchAllData();
  addData(data, panel_active, 0);
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
      addInfo(data, panel);
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }
}
data();

function addInfo(data, panel) {
  switch (panel.getAttribute("id")) {
    case "Taipei":
      addData(data, panel, 0);
      break;
    case "NewYork":
      addData(data, panel, 1);
      break;
    case "Tokyo":
      addData(data, panel, 2);
      break;
    case "Paris":
      addData(data, panel, 3);
      break;
    case "Sydney":
      addData(data, panel, 4);
      break;
  }
}

function addData(data, panel_active, num) {
  setTimeout(() => {
    allDataPara[1].innerText = `${data[num].main.temp}  \u2103`;
    allDataPara[1].classList.add("temp");
    panel_active.appendChild(allDataPara[1]);
    //-----------------------------------------------------------------
    allDataPara[2].innerText = `今日最高溫: ${data[num].main.temp_max}  \u2103`;
    allDataPara[2].classList.add("temp_max");
    panel_active.appendChild(allDataPara[2]);
    allDataPara[3].innerText = `今日最低溫: ${data[num].main.temp_min}  \u2103`;
    allDataPara[3].classList.add("temp_min");
    panel_active.appendChild(allDataPara[3]);
    allDataPara[6].innerText = `體感溫度: ${data[num].main.feels_like}   \u2103`;
    allDataPara[6].classList.add("feels_like");
    panel_active.appendChild(allDataPara[6]);
    //-------------------------------------------------------------------
    allDataPara[8].innerText = `${data[num].weather[0].description}`;
    allDataPara[8].classList.add("description");
    panel_active.appendChild(allDataPara[8]);
    //-------------------------------------------------------------------
    allDataPara[0].innerText = `雲量(覆蓋 %): ${data[num].clouds.all}`;
    allDataPara[0].classList.add("clouds");
    panel_active.appendChild(allDataPara[0]);
    allDataPara[7].innerText = `可見度(10000m): ${data[num].visibility}`;
    allDataPara[7].classList.add("visibility");
    panel_active.appendChild(allDataPara[7]);
    allDataPara[5].innerText = `濕度(%): ${data[num].main.humidity}`;
    allDataPara[5].classList.add("humidity");
    panel_active.appendChild(allDataPara[5]);
    if (data[num].rain) {
      allDataPara[11].innerText = `目前雨量(mm/hr): ${
        data[num].rain[Object.keys(data[num].rain)[0]]
      }`;
      allDataPara[11].classList.add("rain");
      panel_active.appendChild(allDataPara[11]);
    }
    allDataPara[9].innerText = `風速(m/s): ${data[num].wind.speed}`;
    allDataPara[9].classList.add("speed");
    panel_active.appendChild(allDataPara[9]);
    allDataPara[10].innerText = `風向角度: ${data[num].wind.deg} deg`;
    allDataPara[10].classList.add("deg");
    panel_active.appendChild(allDataPara[10]);
    allDataPara[4].innerText = `氣壓(hPa): ${data[num].main.pressure}`;
    allDataPara[4].classList.add("pressure");
    panel_active.appendChild(allDataPara[4]);
  }, 1000);
}
