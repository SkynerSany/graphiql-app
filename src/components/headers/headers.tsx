import './headers.scss';
import lang from './headers.lang.json';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { closeHeadersAlarm, setHeadersStore } from '../../store/reducers';
import { RootState } from '../../store/store';

export default function Headers() {
  const text = lang.ru;
  const dispatch = useDispatch();
  const isOpenHeadersAlarm = useSelector((state: RootState) => state.headers.headersAlarm);
  const [headers, setHeaders] = useState(
    js_beautify(`{"Content-type": "application/json"}`, { indent_size: 2 })
  );

  function getHeaders() {
    dispatch(setHeadersStore(headers));
  }

  function onChange(newValue: string) {
    setHeaders(newValue);
    dispatch(closeHeadersAlarm());
  }

  return (
    <section className="headers">
      <h3>{text.title}</h3>
      <div style={{ height: '1rem' }}>
        {isOpenHeadersAlarm && <p style={{ fontSize: '12px', color: 'red' }}>{text.alarm}</p>}
      </div>
      <button
        onClick={() => {
          getHeaders();
        }}
      >
        {text.addHeaders}
      </button>
      <AceEditor
        placeholder={text.placeholder}
        mode="json"
        theme="kuroir"
        name="headers"
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={headers}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: 'auto' }}
      />
    </section>
  );
}
