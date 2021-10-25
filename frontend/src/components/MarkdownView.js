import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import TextUtilBar from '../components/TextUtilBar';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Editor from '@monaco-editor/react';

const MarkdownView = () => {
    const markdown = '# test';
    const reduxState = useSelector((state) => state);
    const [text, setText] = useState('');
    console.log(reduxState);

    const handleEditorMount = (editor, monaco) => {
      editor.fontSize = "20px"
    };

    return (
        <div>
          <TextUtilBar/>
          {reduxState ? 
          <Editor
          height="90vh"
          defaultLanguage='markdown'
          options={{fontSize: '15px', wordWrap: 'on'}}
          theme="vs-dark"
          defaultValue={text}
          onChange={(e) => setText(e)}
          onMount={handleEditorMount}
          />
          :
          <ReactMarkdown
          children={text}
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