import { createSlice } from "@reduxjs/toolkit";

import { Players } from "../types";
import { removeCardAsync,updateTableAsync } from "./asyncActions";
import C from "./constants";
import U from "./utils";

const initialTableState: Players = C.TABLE;

const tableSlice = createSlice({
  name: "table",
  initialState: initialTableState,
  reducers: {
    reset: () => initialTableState,
  },
  extraReducers: (builder) => {
    builder.addCase(updateTableAsync.fulfilled, (state, action) => {
      const { position, slotIndex, card } = action.meta.arg;
      state[position][slotIndex] = card;
    });
    builder.addCase(removeCardAsync.fulfilled, (state, action) => {
      const { cardIndex } = action.meta.arg;
      U.removeCard(state, cardIndex);
    });
  },
});

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;
