export type TAllNodes = IRoot | object;
export type TRootFunction = () => TAllNodes;
export interface IRoot {
  fields: {
    [key: string]: TRootFunction | TAllNodes;
  };
  fieldsType: {
    [key: string]: string;
  };
  checked: {
    [key: string]: boolean;
  };
  arguments?: {
    [key: string]: () => TAllNodes | TAllNodes;
  };
  parent?: TAllNodes;
}

export interface IPath {
  fieldName: string;
  field: IRoot;
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
