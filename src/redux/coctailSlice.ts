import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Cocktail } from "../components/model/ICocktail";
import { CocktailCardData } from "../components/model/ICocktailCardData";
import { Feedback } from "../components/model/IFeedback";
import {
  BASE_URL,
  getQueryParamByMenuItem,
  transformData,
} from "../utils/util";

export const getMenuData = createAsyncThunk(
  "menuData/getMenuData",
  async (payload: string, thunkAPI) => {
    try {
      const url = BASE_URL + getQueryParamByMenuItem(payload, "list", "list");
      const { data } = await axios.get(url);
      const transformedData = transformData(data.drinks, payload);
      return { data: transformedData, type: payload };
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const fetchCocktailsByCategory = createAsyncThunk(
  "cocktails/fetchCocktailsByCategory",
  async (payload: { type: string; value: string }, thunkAPI) => {
    try {
      const url =
        BASE_URL +
        getQueryParamByMenuItem(payload.type, payload.value, "filter");
      const { data } = await axios.get(url);
      return data.drinks;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong!");
    }
  }
);

export const getCocktailByID = createAsyncThunk(
  "cocktails/getCocktailByID",
  async (payload: string, thunkAPI) => {
    try {
      const url = BASE_URL + "lookup.php?i=" + payload;
      const { data } = await axios.get(url);
      return data.drinks[0] as Cocktail;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong!");
    }
  }
);

export interface MainMenuItems {
  category: Array<Category>;
  ingridients: Array<Category>;
  glasses: Array<Category>;
  alcohol: Array<Category>;
}

export interface AppState {
  cocktail: Cocktail;
  cocktailArr: Array<CocktailCardData>;
  mainMenuItems: MainMenuItems;
  feedback: Feedback;
}

export interface Category {
  title: string;
}

interface CategoryActionData {
  data: Array<Category>;
  type: string;
}

interface CocktailActionData {
  data: Array<CocktailCardData>;
  title: string;
}

const initialState: AppState = {
  cocktailArr: [],
  cocktail: {} as Cocktail,
  mainMenuItems: {
    category: [],
    ingridients: [],
    glasses: [],
    alcohol: [],
  },
  feedback: { status: "", message: "", error: "" },
};

const cocktailSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuData.pending, (state: AppState) => {
      state.feedback.status = "LOADING";
      state.mainMenuItems.category = [];
      state.mainMenuItems.alcohol = [];
      state.mainMenuItems.ingridients = [];
      state.mainMenuItems.glasses = [];
    }),
      builder.addCase(
        getMenuData.fulfilled,
        (state: AppState, action: PayloadAction<CategoryActionData>) => {
          state.feedback.status = "LOADED";
          state.feedback.message = "Loaded...";
          switch (action.payload.type) {
            case "category":
              state.mainMenuItems.category = action.payload.data;
              break;
            case "alcohol":
              state.mainMenuItems.alcohol = action.payload.data;
              break;
            case "ingridients":
              state.mainMenuItems.ingridients = action.payload.data;
              break;
            default:
              state.mainMenuItems.glasses = action.payload.data;
          }
        }
      ),
      builder.addCase(getMenuData.rejected, (state: AppState, action: any) => {
        state.feedback.status = "REJECTED";
        state.feedback.message = action.payload.message;
      });
    builder.addCase(fetchCocktailsByCategory.pending, (state: AppState) => {
      state.feedback.status = "LOADING";
      state.cocktailArr = [];
    });
    builder.addCase(
      fetchCocktailsByCategory.fulfilled,
      (state: AppState, action: PayloadAction<CocktailCardData[]>) => {
        state.feedback.status = "LOADED";
        state.feedback.message = "Loaded...";
        state.cocktailArr = action.payload;
      }
    );
    builder.addCase(
      fetchCocktailsByCategory.rejected,
      (state: AppState, action: any) => {
        state.feedback.status = "REJECTED";
        state.feedback.message = action.payload.message;
      }
    );
    builder.addCase(getCocktailByID.pending, (state: AppState) => {
      state.cocktail = {} as Cocktail;
      state.feedback.status = "LOADING";
    });
    builder.addCase(
      getCocktailByID.fulfilled,
      (state: AppState, action: PayloadAction<Cocktail>) => {
        state.feedback.status = "LOADED";
        state.cocktail = action.payload;
      }
    );
    builder.addCase(
      getCocktailByID.rejected,
      (state: AppState, action: any) => {
        state.cocktail = {} as Cocktail;
        state.feedback.status = "REJECTED";
        state.feedback.message = action.payload.message;
      }
    );
  },
});

export const {} = cocktailSlice.actions;

export default cocktailSlice.reducer;
