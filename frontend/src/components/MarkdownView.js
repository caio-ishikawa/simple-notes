import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Box from '@mui/material/Box';
import TextUtilBar from '../components/TextUtilBar';

const MarkdownView = () => {
    const markdown = '# test';

    return (
        <div>
          <TextUtilBar/>
          <ReactMarkdown
          children={markdown}
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
          <div id="editor"></div>
        </div>
      );
};

export default MarkdownView;