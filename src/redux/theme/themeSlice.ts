// src/features/theme/themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  color: string;
  scroll: string;
  text: string;
  box: string;
}

const initialState: ThemeState = {
  color: "#3f68fe", // 초기 색상
  text: "#3f68fe", // 초기 색상
  scroll: "#9eb3fe", // 초기 색상
  box: "#fefefe", // 초기 색상
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload; // 색상 변경
    },
    setScroll: (state, action: PayloadAction<string>) => {
      state.scroll = action.payload; // 색상 변경
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload; // 색상 변경
    },
    setBox: (state, action: PayloadAction<string>) => {
      state.box = action.payload; // 색상 변경
    },
  },
});

export const { setColor, setScroll, setText, setBox } = themeSlice.actions;
export default themeSlice.reducer;
