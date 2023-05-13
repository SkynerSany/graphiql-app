import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INode } from '../components/documentation/documentation.interfaces';
import { getDocumentationInitialData } from '../components/documentation/documentation.data';

interface IState {
  node: INode;
  errorModal: boolean;
  redirect: boolean;
}

const initialState: IState = {
  node: getDocumentationInitialData(),
  errorModal: false,
  redirect: false,
};

const documentationSlice = createSlice({
  name: 'documentation',
  initialState,
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

const { actions, reducer } = documentationSlice;

const rootReducer = combineReducers({
  store: reducer,
});

export const { updateNode, openErrorModal, closeErrorModal, onRedirect, offRedirect } = actions;
export default rootReducer;
