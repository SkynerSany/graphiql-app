import './documentation.scss';
import { useTranslation } from 'react-i18next';
import lang from './documentation.lang.json';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Path from './components/path';
import List from './components/list';
import { IPath, INode } from './documentation.interfaces';
import { updateNode } from '../../store/reducers';
import { RootState } from '../../store/store';

export default function Documentation(): JSX.Element {
  const { t } = useTranslation();
  const text = lang.en;
  const [path, setPath] = useState<IPath[]>([]);
  const curentNode = useSelector((state: RootState) => state.store.node);
  const dispatch = useDispatch();

  function setPrevField() {
    if (!curentNode.parent) return;
    path.pop();
    setPath(path);
    dispatch(updateNode(curentNode.parent as INode));
  }

  return (
    <section className="documentation">
      <h3>{t('documentation.title')}</h3>
      <Path path={path} setPath={setPath} />
      <button onClick={() => setPrevField()} className="documentation__prevButton">
        {'<'}
      </button>
      {curentNode.arguments && (
        <List curentNode={curentNode} path={path} setPath={setPath} type="arguments" />
      )}
      {curentNode.fields && (
        <List curentNode={curentNode} path={path} setPath={setPath} type="fields" />
      )}
    </section>
  );
}
