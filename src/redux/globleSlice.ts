import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface globalSlice {
  languages: string;
  currency: string;
  isCartOpen: boolean;
  isfavoriteOpen: boolean;
  isSearchOpen: boolean;
  isLogin: boolean;
  isOptionHeaderOpen: boolean;
  isMenuOpen: boolean;
}
const initialState: globalSlice = {
  languages: "english",
  currency: "USD",
  isOptionHeaderOpen: false,
  isCartOpen: false,
  isfavoriteOpen: false,
  isSearchOpen: false,
  isLogin: false,
  isMenuOpen: false,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.languages = action.payload;
    },
    changeCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    changeCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
    changeFavoriteOpen: (state, action: PayloadAction<boolean>) => {
      state.isfavoriteOpen = action.payload;
    },
    changeSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.isSearchOpen = action.payload;
    },
    changeLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    changeOptionHeaderOpen: (state, action: PayloadAction<boolean>) => {
      state.isOptionHeaderOpen = action.payload;
    },
    changeMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
  },
});
export const {
  changeLanguage,
  changeCartOpen,
  changeCurrency,
  changeFavoriteOpen,
  changeLogin,
  changeSearchOpen,
  changeOptionHeaderOpen,
  changeMenuOpen,
} = globalSlice.actions;
export default globalSlice.reducer;
