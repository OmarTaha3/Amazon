import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
  products: [],
  category: "All",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://fakestoreapi.com/products",
      });
      const randData = data.sort(() => Math.random() - 0.5);
      return randData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addToCart,
  deleteFromCart,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  setCategory,
} = productSlice.actions;
export default productSlice.reducer;
