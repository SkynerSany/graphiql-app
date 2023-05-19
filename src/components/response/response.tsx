import './response.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import lang from './response.lang.json';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { setResponse } from '../../store/reducers';

export default function Response() {
  const dispatch = useDispatch();
  const text = lang.en;
  const response = useSelector((state: RootState) => state.response.response);

  const clear = () => dispatch(setResponse(''));

  return (
    <section className="response">
      <div className="editor__header">
        <h3>{text.title}</h3>
        <button
          onClick={() => {
            clear();
          }}
        >
          {text.clear}
        </button>
      </div>
      <AceEditor
        placeholder={text.response_placeholder}
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
