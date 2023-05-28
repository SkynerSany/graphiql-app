import { v1 } from 'uuid';
import { useDispatch } from 'react-redux';
import { updateNode } from '../../../store/reducers';
import { IListProps, INode } from '../documentation.interfaces';
import MyButton from '../../myButton/myButton';

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

  return (
    <>
      <h3>{type}</h3>
      <ul className="documentation__list">
        {Object.keys(curentNode[type] || []).map((fieldName) => {
          return (
            <li key={v1()}>
              <MyButton
                content={`${fieldName}: ${curentNode[type]![fieldName].type}`}
                className={''}
                event={() => nextField(fieldName)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
