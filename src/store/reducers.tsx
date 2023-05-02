import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  search: string;
}

const initialState: IState = {
  search: '',
};

const appSlice = createSlice({
  name: 'appStore',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;

const rootReducer = combineReducers({
  store: reducer,
});

export const { setSearch } = actions;
export default rootReducer;
