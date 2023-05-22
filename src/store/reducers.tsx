import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INode } from '../components/documentation/documentation.interfaces';
import { getDocumentationInitialData } from '../components/documentation/documentation.data';
import { IDocumentationState, IResponseState } from './store.interfaces';

const initialDocumentationState: IDocumentationState = {
  node: getDocumentationInitialData(),
  errorModal: false,
  redirect: false,
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

const initialVariablesState = {
  variables: `{}`,
};

const variablesSlice = createSlice({
  name: 'variables',
  initialState: initialVariablesState,
  reducers: {
    setVariables: (state, action: PayloadAction<string>) => {
      state.variables = action.payload;
    },
  },
});
const initialHeadersState = {
  headers: `{}`,
};

const headersSlice = createSlice({
  name: 'headers',
  initialState: initialHeadersState,
  reducers: {
    setHeadersStore: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
  },
});

const initialResponseState: IResponseState = {
  response: '',
};

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
  variables: variablesSlice.reducer,
  headers: headersSlice.reducer,
});

export const { setResponse } = responseSlice.actions;
export const { setVariables } = variablesSlice.actions;
export const { setHeadersStore } = headersSlice.actions;
export const { updateNode, openErrorModal, closeErrorModal, onRedirect, offRedirect } = actions;

export default rootReducer;
