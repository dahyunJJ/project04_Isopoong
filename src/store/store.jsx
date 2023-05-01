import { configureStore, createSlice } from "@reduxjs/toolkit";

import seoulData from "../data/seoulData";
import gyeonggiData from "../data/gyeonggiData";
import chungcheongData from "../data/chungcheongData";
import gangwonData from "../data/gangwonData";
import gyeongsangData from "../data/gyeongsangData";
import jejuData from "../data/jejuData";
import jeollaData from "../data/jeollaData";
import MetCityData from "../data/MetCityData";
import hospitalData from "../data/hospitalData";

let allLocaData = [
  ...seoulData,
  ...gyeonggiData,
  ...chungcheongData,
  ...gangwonData,
  ...gyeongsangData,
  ...jejuData,
  ...jeollaData,
  ...MetCityData,
];
const data = createSlice({
  name: "data",
  initialState: allLocaData,
});

let seoul = createSlice({
  name: "seoul",
  initialState: seoulData,
});
let gyeonggi = createSlice({
  name: "gyeonggi",
  initialState: gyeonggiData,
});
let chungcheong = createSlice({
  name: "chungcheong",
  initialState: chungcheongData,
});
let gangwon = createSlice({
  name: "gangwon",
  initialState: gangwonData,
});
let gyeongsang = createSlice({
  name: "gyeongsang",
  initialState: gyeongsangData,
});
let jeju = createSlice({
  name: "jeju",
  initialState: jejuData,
});
let jeolla = createSlice({
  name: "jeolla",
  initialState: jeollaData,
});
let MetCity = createSlice({
  name: "MetCity",
  initialState: MetCityData,
});

let hospital = createSlice({
  name: "hospital",
  initialState: hospitalData,
});

export default configureStore({
  reducer: {
    seoul: seoul.reducer,
    gyeonggi: gyeonggi.reducer,
    chungcheong: chungcheong.reducer,
    gangwon: gangwon.reducer,
    gyeongsang: gyeongsang.reducer,
    jeju: jeju.reducer,
    jeolla: jeolla.reducer,
    MetCity: MetCity.reducer,
    data: data.reducer,
    hospital: hospital.reducer,
  },
});
