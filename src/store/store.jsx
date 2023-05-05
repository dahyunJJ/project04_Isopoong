import { configureStore, createSlice } from "@reduxjs/toolkit";

import seoulData from "./seoulData";
import gyeonggiData from "./gyeonggiData";
import chungcheongData from "./chungcheongData";
import gangwonData from "./gangwonData";
import gyeongsangData from "./gyeongsangData";
import jejuData from "./jejuData";
import jeollaData from "./jeollaData";
import MetCityData from "./MetCityData";
import hospitalData from "./hospitalData";
import reviewData from "./reviewData";

let allLocalData = [
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
  initialState: allLocalData,
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

let review = createSlice({
  name: "review",
  initialState: reviewData,
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
    review: review.reducer,
  },
});
