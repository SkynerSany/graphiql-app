import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { setHeadersStore } from '../../store/reducers';

import './headers.scss';

export default function Headers() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [headers, setHeaders] = useState(
    js_beautify(`{"Content-type": "application/json"}`, { indent_size: 2 })
  );

  function getHeaders() {
    dispatch(setHeadersStore(headers));
  }

  function onChange(newValue: string) {
    setHeaders(newValue);
  }

  return (
    <section className="headers">
      <h3>{t('headers.title')}</h3>
      <button
        onClick={() => {
          getHeaders();
        }}
      >
        {t('headers.addHeaders')}
      </button>
      <AceEditor
        placeholder={t('headers.placeholder')}
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
