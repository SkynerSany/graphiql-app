import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { closeVariablesAlarm, setVariables } from '../../store/reducers';
import { RootState } from '../../store/store';
import MyButton from '../myButton/myButton';

import './variables.scss';

export default function Variables() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isOpenVariablesAlarm = useSelector((state: RootState) => state.variables.variablesAlarm);
  const [variable, setVariable] = useState(
    js_beautify(`{"status": "dead", "name": "rick"}`, { indent_size: 2 })
  );
  const [toggle, setToggle] = useState(true);

  function getVariables() {
    dispatch(setVariables(variable));
  }

  function onChange(newValue: string) {
    dispatch(closeVariablesAlarm());
    setVariable(newValue);
  }

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <section className="variables">
      <h3>{t('variables.title')}</h3>
      <div style={{ height: '1rem' }}>
        {isOpenVariablesAlarm && (
          <p style={{ fontSize: '12px', color: 'red' }}>{t('variables.alarm')}</p>
        )}
      </div>
      <MyButton content={t('variables.addVariables')} className={'h-mb20'} event={getVariables} />
      <div className="close__container">
        <MyButton content={'X'} className={'close'} event={handleClick} />
      </div>
      {toggle && (
        <AceEditor
          placeholder={t('variables.placeholder')}
          mode="json"
          theme="kuroir"
          name="variables"
          onChange={onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={variable}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
            useWorker: false,
          }}
          style={{ width: 'auto' }}
        />
      )}
    </section>
  );
}
