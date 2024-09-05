// src/features/theme/themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  color: string;
  scroll: string;
}

const initialState: ThemeState = {
  color: "#3f68fe", // 초기 색상
  scroll: "#9eb3fe", // 초기 색상
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
  },
});

export const { setColor, setScroll } = themeSlice.actions;
export default themeSlice.reducer;
