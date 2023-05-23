import { useDispatch, useSelector } from 'react-redux';
import lang from './response.lang.json';
import { useTranslation } from 'react-i18next';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { RootState } from '../../store/store';
import { setResponse } from '../../store/reducers';

import './response.scss';

export default function Response() {
  const dispatch = useDispatch();
  const text = lang.en;
  const { t } = useTranslation();
  const response = useSelector((state: RootState) => state.response.response);

  const clear = () => dispatch(setResponse(''));

  return (
    <section className="response">
      <div className="editor__header">
        <h3>{t('response.title')}</h3>
        <button
          onClick={() => {
            clear();
          }}
        >
          {t('response.clear')}
        </button>
      </div>
      <AceEditor
        placeholder={t('response.placeholder')}
        mode="json"
        theme="kuroir"
        name="response"
        fontSize={14}
        readOnly={true}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={response}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: 'auto' }}
      />
    </section>
  );
}
