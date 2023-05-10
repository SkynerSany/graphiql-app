import { v1 } from 'uuid';
import { INode, IPath, IPathProps } from '../documentation.interfaces';
import { useDispatch } from 'react-redux';
import { updateNode } from '../../../store/reducers';

export default function Path({ path, setPath }: IPathProps) {
  const dispatch = useDispatch();

  function changePath(field: IPath) {
    const newPath = path.slice(0, path.indexOf(field) + 1);
    setPath(newPath);
    dispatch(updateNode(field.field as INode));
  }

  return (
    <ul className="documentation__path">
      <li>Root</li>
      <li>{'>'}</li>
      {path.map((field) => (
        <div key={v1()}>
          <li onClick={() => changePath(field)} className="documentation__path-link">
            {field.fieldName}
          </li>
          <li>{'>'}</li>
        </div>
      ))}
    </ul>
  );
}
