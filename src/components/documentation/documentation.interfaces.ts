export type TAllNodes = INode | object | string;
export type TNodeFunction = (parent?: INode) => TAllNodes;

export interface IBaseNode {
  node: () => INode;
  checked: boolean;
  type: string;
}
export interface INode {
  fields: {
    [key: string]: {
      node: TNodeFunction | TAllNodes;
      checked: boolean;
      type: string;
    };
  };
  arguments?: {
    [key: string]: {
      node: TNodeFunction | TAllNodes;
      checked: boolean;
      type: string;
    };
  };
  parent?: TAllNodes;
}

export interface IPath {
  fieldName: string;
  field: TAllNodes;
}

export interface IInputProps {
  updateField: (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => void;
  fieldName: string;
  checked: boolean;
}

export interface IPathProps {
  path: IPath[];
  setPath: React.Dispatch<React.SetStateAction<IPath[]>>;
}

export interface IListProps {
  curentNode: INode;
  path: IPath[];
  setPath: React.Dispatch<React.SetStateAction<IPath[]>>;
  type: 'fields' | 'arguments';
}
