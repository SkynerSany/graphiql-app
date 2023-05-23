import { useTranslation } from 'react-i18next';
import './editor.scss';
import { useState } from 'react';
import {
  closeResponseAlarm,
  openHeadersAlarm,
  openResponseAlarm,
  openVariablesAlarm,
  setResponse,
} from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { setResponse } from '../../store/reducers';
import { RootState } from '../../store/store';

interface IQueryObj {
  query: string;
  variables: object;
  headers: HeadersInit | undefined;
}

export default function Editor() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isOpenRequestAlarm = useSelector((state: RootState) => state.response.responseAlarm);

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
  const queryObj = { query: query, variables: {}, headers: {} };
  const variablesString = useSelector((state: RootState) => state.variables.variables);
  const headersString = useSelector((state: RootState) => state.headers.headers);
  try {
    queryObj.variables = JSON.parse(variablesString);
  } catch (err) {
    dispatch(openVariablesAlarm());
    // if (err instanceof Error) console.log('queryObjError=', err.message);
  }
  try {
    queryObj.headers = JSON.parse(headersString);
  } catch (err) {
    dispatch(openHeadersAlarm());
    // if (err instanceof Error) console.log('queryObjError=', err.message);
  }

  function getResponse() {
    dispatch(closeResponseAlarm());
    const url = 'https://rickandmortyapi.com/graphql';

    const makeRequest = async ({ query, variables, headers }: IQueryObj) => {
      console.log('query/var=', query, '=', variables, '=', headers);

      return fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ query, variables }),
      }).then((res) => {
        console.log('responseStatus=', res.status, 'responseOK=', res.ok);
        if (res.ok) {
          return res.json();
        } else {
          dispatch(openResponseAlarm());
        }
      });
    };

    makeRequest(queryObj).then(({ data }) =>
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
        <div style={{ height: '1rem' }}>
          {isOpenRequestAlarm && (
            <p style={{ fontSize: '12px', color: 'red' }}>{t('page.editor.checkData')}</p>
          )}
        </div>
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
