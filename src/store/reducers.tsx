import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INode } from '../components/documentation/documentation.interfaces';
import { getDocumentationInitialData } from '../components/documentation/documentation.data';
import { IDocumentationState, IResponseState } from './store.interfaces';

const initialDocumentationState: IDocumentationState = {
  node: getDocumentationInitialData(),
};

const initialResponseState: IResponseState = {
  response: '',
};

const documentationSlice = createSlice({
  name: 'documentation',
  initialState: initialDocumentationState,
  reducers: {
    updateNode: (state, action: PayloadAction<INode>) => {
      state.node = action.payload;
    },
  },
});

const responseSlice = createSlice({
  name: 'response',
  initialState: initialResponseState,
  reducers: {
    setResponse: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
    },
  },
});

const { actions, reducer } = documentationSlice;

const rootReducer = combineReducers({
  store: reducer,
  response: responseSlice.reducer,
});

export const { updateNode } = actions;
export const { setResponse } = responseSlice.actions;
export default rootReducer;
