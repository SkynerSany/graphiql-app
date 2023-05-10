import './documentation.scss';
import { useState } from 'react';
import { v1 } from 'uuid';
import Input from './components/input.js';
import Path from './components/path.js';
import { IPath, IRoot, TRootFunction } from './documentation.interfaces.js';
import { useDispatch, useSelector } from 'react-redux';
import { updateNode } from '../../store/reducers.js';
import { RootState } from '../../store/store.js';

export default function Documentation(): JSX.Element {
  const [path, setPath] = useState<IPath[]>([]);
  const curentNode = useSelector((state: RootState) => state.store.node);
  const dispatch = useDispatch();

  function nextField(fieldName: string): void {
    if (
      typeof curentNode.fields[fieldName] !== 'function' &&
      typeof curentNode.fields[fieldName] !== 'object'
    )
      return;
    if (typeof curentNode.fields[fieldName] === 'function')
      curentNode.fields[fieldName] = (curentNode.fields[fieldName] as TRootFunction)();
    path.push({
      fieldName,
      field: curentNode.fields[fieldName] as IRoot,
    });
    setPath(path);
    dispatch(updateNode(curentNode.fields[fieldName] as IRoot));
  }

  function updateField(e: React.ChangeEvent<HTMLInputElement>, fieldName: string) {
    curentNode.checked[fieldName] = e.target.checked;
    dispatch(updateNode(curentNode));
  }

  function setPrevField() {
    if (!curentNode.parent) return;
    path.pop();
    setPath(path);
    dispatch(updateNode(curentNode.parent as IRoot));
  }

  return (
    <section className="documentation">
      <Path path={path} setPath={setPath} />
      <button onClick={() => setPrevField()} className="documentation__prevButton">
        {'<'}
      </button>
      <ul className="documentation__list">
        {Object.keys(curentNode.fields).map((fieldName) => {
          return (
            <li key={v1()}>
              <Input
                updateField={updateField}
                fieldName={fieldName}
                checked={curentNode.checked[fieldName]}
              />
              <p
                onClick={() => nextField(fieldName)}
              >{`${fieldName}: ${curentNode.fieldsType[fieldName]}`}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
