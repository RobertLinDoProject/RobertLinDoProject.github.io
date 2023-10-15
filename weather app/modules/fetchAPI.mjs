import { Taipei, NewYork, Tokyo, Paris, Sydney } from "./URL.mjs";

export async function TaipeiData() {
  let api = await fetch(Taipei);
  let data = await api.json();
  return data;
}
export async function NewYorkData() {
  let api = await fetch(NewYork);
  let data = await api.json();
  return data;
}
export async function TokyoData() {
  let api = await fetch(Tokyo);
  let data = await api.json();
  return data;
}
export async function ParisData() {
  let api = await fetch(Paris);
  let data = await api.json();
  return data;
}
export async function SydneyData() {
  let api = await fetch(Sydney);
  let data = await api.json();
  return data;
}
