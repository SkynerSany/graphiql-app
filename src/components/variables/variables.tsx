import './variables.scss';
import lang from './variables.lang.json';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { closeVariablesAlarm, setVariables } from '../../store/reducers';
import { RootState } from '../../store/store';

export default function Variables() {
  const text = lang.ru;
  const dispatch = useDispatch();
  const isOpenVariablesAlarm = useSelector((state: RootState) => state.variables.variablesAlarm);
  const [variable, setVariable] = useState(
    js_beautify(`{"status": "dead", "name": "rick"}`, { indent_size: 2 })
  );

  function getVariables() {
    dispatch(setVariables(variable));
  }

  function onChange(newValue: string) {
    dispatch(closeVariablesAlarm());
    setVariable(newValue);
  }

  return (
    <section className="variables">
      <h3>{text.title}</h3>
      <div style={{ height: '1rem' }}>
        {isOpenVariablesAlarm && <p style={{ fontSize: '12px', color: 'red' }}>{text.alarm}</p>}
      </div>
      <button
        onClick={() => {
          getVariables();
        }}
      >
        {text.addVariables}
      </button>
      <AceEditor
        placeholder={text.placeholder}
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
        }}
        style={{ width: 'auto' }}
      />
    </section>
  );
}
