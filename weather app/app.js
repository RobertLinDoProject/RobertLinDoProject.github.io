import {
  NewTaipeiData,
  NewNewYorkData,
  NewTokyoData,
  NewSydneyData,
  NewParisData,
} from "./modules/filteredData.mjs";

export async function fetchAllData() {
  let TaipeiData = await NewTaipeiData();
  let NewYorkData = await NewNewYorkData();
  let TokyoData = await NewTokyoData();
  let SydneyData = await NewSydneyData();
  let ParisData = await NewParisData();
  let data = [TaipeiData, NewYorkData, TokyoData, SydneyData, ParisData];

  return data;
}
