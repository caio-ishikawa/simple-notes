import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import TextUtilBar from '../components/TextUtilBar';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useEffect } from 'react';
import Axios from 'axios';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  mainDiv: {
    overflow: "hidden",
    height: "100%",
    background: "white",
    paddingLeft: "2vh"

  },
  barDiv: {
    background: "#EBEAEB",
  },
  bar: {
    minHeight: "3.66vh",
  },
  markdownView: {
    paddingLeft: "5.8vh",
    paddingRight: "3vh"
  },
  editorDiv: {
    marginRight: "5vh"
  }
});

const MarkdownView = (props) => {
    const classes = useStyles();
    const reduxEditState = useSelector((state) => state.edit);
    const reduxNoteState = useSelector((state) => state.note);
    const item = localStorage.getItem('title');
    const email = props.email;
    const [text, setText] = useState('');
    const [update, setUpdate] = useState();
    const initialState = '';

    // Query DB based on the redux state containing note_title, and changes default value of the markdown reader & editor //
    useEffect(() => {
      if (item) {
        console.log(reduxNoteState.payload)
        let data ={
          email: email,
          title: item
        };
        Axios.post('http://localhost:3002/user/get_content', data)
        .then((res) => setText(res.data))
      } else {
        alert('uh oh');
      }
      // Clears updated note state //
      setUpdate(initialState);
    },[item]);

    // Sets up VIM keybinds pre mount //
    const handleEditorMount = (editor, monaco) => {
      // setup key bindings
      editor.addAction({
        // an unique identifier of the contributed action
        id: "some-unique-id",
        // a label of the action that will be presented to the user
        label: "Some label!",
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S],
        // the method that will be executed when the action is triggered.
        run: function (editor) {
          alert("we wanna save something => " + editor.getValue());
          return null;
        }
      });
      // setup monaco-vim
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

    // Updates the text on ReactMarkdown when editing //
    const updateNote = (e) => {
      setUpdate(e);
    };

    return (
        <div className={classes.barDiv}>
          <div className={classes.bar}>
            <TextUtilBar className={classes.utilBar} content={update ? update : text} title={item}/>
          </div>
          <div className={classes.mainDiv}>
            {reduxEditState === true ? 
            <div className={classes.editorDiv}>
              <Editor
              height="90vh"
              defaultLanguage='markdown'
              options={{fontSize: '15px', wordWrap: 'on', lineNumbers: "off"}}
              theme="vs-light"
              defaultValue={update ? update : text}
              onChange={(e) => updateNote(e)}
              onMount={handleEditorMount}
              />
              <code className="status-node"></code>
            </div>
            :
            <ReactMarkdown
            className={classes.markdownView}
            children={update ? update : text}
            components={{
            code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
            />
          }
            <div className={classes.editorDiv} id="editor"></div>
          </div>
        </div>
      );
};

export default MarkdownView;