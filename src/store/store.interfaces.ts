import { INode } from '../components/documentation/documentation.interfaces';

export interface IDocumentationState {
  node: INode;
  errorModal: boolean;
  redirect: boolean;
}

export interface IResponseState {
  response: string;
  responseAlarm: boolean;
}
