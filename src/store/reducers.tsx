import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INode } from '../components/documentation/documentation.interfaces';
import { getDocumentationInitialData } from '../components/documentation/documentation.data';

interface IState {
  node: INode;
}

const initialState: IState = {
  node: getDocumentationInitialData(),
};

const documentationSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    updateNode: (state, action: PayloadAction<INode>) => {
      state.node = action.payload;
    },
  },
});

const { actions, reducer } = documentationSlice;

const rootReducer = combineReducers({
  store: reducer,
});

export const { updateNode } = actions;
export default rootReducer;
