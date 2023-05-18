import './response.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import lang from './response.lang.json';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';

export default function Response() {
  const text = lang.en;
  const response = useSelector((state: RootState) => state.response.response);

  return (
    <section className="response">
      <div className="editor__header">
        <h3 className="h-mb20">{text.title}</h3>
      </div>
      <AceEditor
        placeholder={text.response_placeholder}
        mode="json"
        theme="kuroir"
        name="blah2"
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
      />
    </section>
  );
}
