import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
    searchString: "",
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeMenu: (state) => {
      state.isSideBarOpen = false;
    },
    openMenu: (state) => {
      state.isSideBarOpen = true;
    },
    finalSearchStore: (state, action) => {
      state.searchString = action.payload;
    },
  },
});

export const { toggleSideBar, closeMenu, openMenu, finalSearchStore } =
  appSlice.actions;
export default appSlice.reducer;
