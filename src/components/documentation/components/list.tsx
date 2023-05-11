import { v1 } from 'uuid';
import Input from './input';
import { useDispatch } from 'react-redux';
import { updateNode } from '../../../store/reducers';
import { IListProps, INode } from '../documentation.interfaces';

export default function List({ curentNode, path, setPath, type }: IListProps): JSX.Element {
  const dispatch = useDispatch();

  function nextField(fieldName: string): void {
    const nextNode = curentNode[type]![fieldName].node;

    if (typeof nextNode !== 'function' && typeof nextNode !== 'object') return;
    if (typeof nextNode === 'function') curentNode[type]![fieldName].node = nextNode();

    path.push({
      fieldName,
      field: curentNode[type]![fieldName].node,
    });
    setPath(path);

    dispatch(updateNode(curentNode[type]![fieldName].node as INode));
  }

  function updateField(e: React.ChangeEvent<HTMLInputElement>, fieldName: string): void {
    curentNode[type]![fieldName].checked = e.target.checked;
    dispatch(updateNode(curentNode));
  }

  return (
    <>
      <h3>{type}</h3>
      <ul className="documentation__list">
        {Object.keys(curentNode[type] || []).map((fieldName) => {
          return (
            <li key={v1()}>
              <Input
                updateField={updateField}
                fieldName={fieldName}
                checked={curentNode[type]![fieldName].checked}
              />
              <p onClick={() => nextField(fieldName)}>{`${fieldName}: ${
                curentNode[type]![fieldName].type
              }`}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
