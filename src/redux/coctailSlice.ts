import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Cocktail } from "../components/model/ICocktail";
import { Feedback } from "../components/model/IFeedback";

export interface AppState {
  cocktailArr: Array<Cocktail>;
  categoryArr: Array<Category>;
  feedback: Feedback;
}

interface Category {
  title: string;
}

const initialState: AppState = {
  cocktailArr: [],
  categoryArr: [],
  feedback: { status: "", message: "", error: "" },
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      console.log(data.drinks);
      return data.drinks;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const getGlasses = createAsyncThunk(
  "glass/getGlasses",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const cocktailSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state: AppState) => {
      state.feedback.status = "LOADING";
      state.categoryArr = [];
    }),
      builder.addCase(
        getCategories.fulfilled,
        (state: AppState, action: PayloadAction<Category[]>) => {
          state.feedback.status = "LOADED";
          state.feedback.message = "Loaded...";
          state.categoryArr = action.payload;
        }
      ),
      builder.addCase(
        getCategories.rejected,
        (state: AppState, action: any) => {
          state.feedback.status = "REJECTED";
          state.feedback.message = action.payload.message;
        }
      );
  },
});

export const {} = cocktailSlice.actions;

export default cocktailSlice.reducer;
