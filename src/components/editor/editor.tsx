import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { setResponse } from '../../store/reducers';
import { RootState } from '../../store/store';

import './editor.scss';

export default function Editor() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const variablesString = useSelector((state: RootState) => state.variables.variables);
  const variables = JSON.parse(variablesString);

  const headersString = useSelector((state: RootState) => state.headers.headers);
  const headers = JSON.parse(headersString);

  const [query, setQuery] = useState(
    js_beautify(
      `query name($name: String,$status: String) {
      characters(filter: {name: $name, status: $status }){
      results{
      name
      status
      }}
      }`,
      { indent_size: 2 }
    )
  );

  function getResponse() {
    const url = 'https://rickandmortyapi.com/graphql';

    const makeRequest = (query: string) => {
      console.log('query/var=', query, '=', variables, '=', headers);
      return fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ query, variables }),
      }).then((res) => res.json());
    };

    makeRequest(query).then(({ data }) =>
      dispatch(setResponse(js_beautify(JSON.stringify(data), { indent_size: 2 })))
    );
  }

  function onChange(newValue: string) {
    setQuery(newValue);
  }

  return (
    <section className="editor">
      <div className="editor__header">
        <h3>{t('page.editor.title')}</h3>
        <button onClick={() => getResponse()}>{t('page.editor.send')}</button>
      </div>
      <AceEditor
        placeholder={t('page.editor.response_placeholder')}
        mode="json"
        theme="kuroir"
        name="editor"
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={query}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: 'auto' }}
      />
    </section>
  );
}
