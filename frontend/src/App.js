import './App.css'; 
import Editor from '@monaco-editor/react';

function App() {

  function handleEditorDidMount(editor, monaco) {
    // Setup key bindings
    editor.addAction({
      // Unique identifier of the contributed action
      id: "some-unique-id",
      // A label of the action that will be presented to the user
      label: "Some label!",
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S],
      // Method that will be executed when the action is triggered.
      run: function (editor) {
        return null;
      }
    });

    // Setup monaco-vim
    window.require.config({
      paths: {
        "monaco-vim": "https://unpkg.com/monaco-vim/dist/monaco-vim"
      }
    });

    window.require(["monaco-vim"], function (MonacoVim) {
      const statusNode = document.querySelector(".status-node");
      MonacoVim.initVimMode(editor, statusNode);
    });
  }

  return (
    <div>
    <Editor
      height="90vh"
      language="markdown"
      wrapperClassName="something"
      onMount={handleEditorDidMount}
      theme="vs-dark"
    />
    <code className="status-node"></code>
  </div>
  );
}

export default App;
