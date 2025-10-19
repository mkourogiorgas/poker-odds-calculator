import { createAsyncThunk } from "@reduxjs/toolkit";

import { Card } from "../types";
import { RootState } from "./index";

export const updateTableAsync = createAsyncThunk(
  "table/updateTableAsync",
  (args: { card: Card; position: string; slotIndex: number }) => {
    return args;
  }
);

export const removeCardAsync = createAsyncThunk(
  "table/removeCardAsync",
  (args: { cardIndex: number }) => {
    return args;
  }
);

export const validateAsync = createAsyncThunk(
  "validation/validateAsync",
  (_, { getState }) => {
    return getState() as RootState;
  }
);
