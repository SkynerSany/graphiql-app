import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INode } from '../components/documentation/documentation.interfaces';
import { getDocumentationInitialData } from '../components/documentation/documentation.data';
import { IDocumentationState, IResponseState } from './store.interfaces';

const initialDocumentationState: IDocumentationState = {
  node: getDocumentationInitialData(),
  errorModal: false,
  redirect: false,
}

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
    openErrorModal: (state) => {
      state.errorModal = true;
    },
    closeErrorModal: (state) => {
      state.errorModal = false;
    },
    onRedirect: (state) => {
      state.redirect = true;
    },
    offRedirect: (state) => {
      state.redirect = false;
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

export const { setResponse } = responseSlice.actions;
export const { updateNode, openErrorModal, closeErrorModal, onRedirect, offRedirect } = actions;

export default rootReducer;
