import './App.css'; import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownKeymap, markdownLanguage } from '@codemirror/lang-markdown';
import 'codemirror/theme/cobalt.css';

function App() {
  return (
    <div className="App">
      <p>Test</p>
      <CodeMirror
      extensions={[
        markdown({ base: markdownLanguage })
      ]}
      options={{
        theme: 'cobalt',
        lineNumers: false
      }}
      />
    </div>
  );
}

export default App;
