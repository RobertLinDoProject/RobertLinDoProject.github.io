import {
  TaipeiData,
  NewYorkData,
  ParisData,
  TokyoData,
  SydneyData,
} from "./fetchAPI.mjs";

const elementsCheck = [
  "weather",
  "main",
  "visibility",
  "wind",
  "clouds",
  "rain",
  "snow",
];

export async function NewTaipeiData() {
  let data = await TaipeiData();
  let NewData = {};
  //use element to filter origin object
  for (let i of elementsCheck) {
    if (data[i] !== undefined) {
      NewData[i] = data[i];
    }
  }
  return NewData;
}
export async function NewNewYorkData() {
  let data = await NewYorkData();
  let NewData = {};

  //use element to filter origin object
  for (let i of elementsCheck) {
    if (data[i] !== undefined) {
      NewData[i] = data[i];
    }
  }
  return NewData;
}
export async function NewParisData() {
  let data = await ParisData();
  let NewData = {};

  //use element to filter origin object
  for (let i of elementsCheck) {
    if (data[i] !== undefined) {
      NewData[i] = data[i];
    }
  }
  return NewData;
}
export async function NewTokyoData() {
  let data = await TokyoData();
  let NewData = {};

  //use element to filter origin object
  for (let i of elementsCheck) {
    if (data[i] !== undefined) {
      NewData[i] = data[i];
    }
  }
  return NewData;
}
export async function NewSydneyData() {
  let data = await SydneyData();
  let NewData = {};

  //use element to filter origin object
  for (let i of elementsCheck) {
    if (data[i] !== undefined) {
      NewData[i] = data[i];
    }
  }
  return NewData;
}
