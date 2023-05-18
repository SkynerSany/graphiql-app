import './variables.scss';
import lang from './variables.lang.json';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { setVariables } from '../../store/reducers';

export default function Variables() {
  const text = lang.ru;
  const dispatch = useDispatch();
  const [variable, setVariable] = useState(
    js_beautify(`{status: "alive", name: "sanchez"}`, { indent_size: 2 })
  );

  function getVariables() {
    // console.log(JSON.stringify(variable));
    dispatch(setVariables(JSON.stringify(variable)));
  }

  function onChange(newValue: string) {
    setVariable(newValue);
  }

  return (
    <section className="variables">
      <h3>{text.title}</h3>
      <button
        onClick={() => {
          getVariables();
        }}
      >
        {text.save}
      </button>
      <AceEditor
        placeholder={text.placeholder}
        mode="json"
        theme="kuroir"
        name="blah2"
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
