// Фактически не реализован, тк основной список не фетчится в стор, а сохраняется в стор RTQ
//Данный стор можно считать глобальным. В нем хранится свойство поиска, и вкладки для RTQ запросов на сервер.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCollection } from "../../models/IProductCollection";

const initialState: IProductCollection = {
  products: [],
  isLoading: false,
  error: "",
  menuPage: "electronics",
  searchState: ""
};

export const productSlicer = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeMenuPage(state, action: PayloadAction<string>) {
      state.menuPage = action.payload;
    },
    changeSearchState(state, action: PayloadAction<string>) {
      state.searchState = action.payload;
    }
  }
});
export default productSlicer.reducer;
