import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import TextUtilBar from '../components/TextUtilBar';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useEffect } from 'react';
import Axios from 'axios';

const MarkdownView = (props) => {
    const reduxEditState = useSelector((state) => state.edit);
    const reduxNoteState = useSelector((state) => state.note);
    const item = localStorage.getItem('title');
    const email = props.email;
    const [text, setText] = useState('');
    const [update, setUpdate] = useState();
    const initialState = '';

    // Query DB based on the redux state containing note_title, and changes default value of the markdown reader & editor (buggy) //
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
        alert('uh oh')
      }
    },[reduxNoteState]);

    const handleEditorMount = async (editor, monaco) => {
      editor.fontSize = "20px"
    };

    const updateNote = (e) => {
      // If localStorage('title') updates, delete update state //
      setUpdate(e);
      console.log(update);
    };

    return (
        <div>
          <TextUtilBar content={text}/>
          {reduxEditState ? 
          <Editor
          height="90vh"
          defaultLanguage='markdown'
          options={{fontSize: '15px', wordWrap: 'on'}}
          theme="vs-dark"
          defaultValue={update ? update : text}
          onChange={(e) => updateNote(e)}
          onMount={handleEditorMount}
          />
          :
          <ReactMarkdown
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
          <div id="editor"></div>
        </div>
      );
};

export default MarkdownView;