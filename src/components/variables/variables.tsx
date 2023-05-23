import lang from './variables.lang.json';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { setVariables } from '../../store/reducers';

import './variables.scss';

export default function Variables() {
  const text = lang.ru;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [variable, setVariable] = useState(
    js_beautify(`{"status": "dead", "name": "rick"}`, { indent_size: 2 })
  );

  function getVariables() {
    dispatch(setVariables(variable));
  }

  function onChange(newValue: string) {
    setVariable(newValue);
  }

  return (
    <section className="variables">
      <h3>{t('variables.title')}</h3>
      <button
        onClick={() => {
          getVariables();
        }}
      >
        {t('variables.addVariables')}
      </button>
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
        }}
        style={{ width: 'auto' }}
      />
    </section>
  );
}
