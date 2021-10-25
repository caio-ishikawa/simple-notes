import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import TextUtilBar from '../components/TextUtilBar';
import { useSelector } from 'react-redux';

const MarkdownView = () => {
    const markdown = '# test';
    const reduxState = useSelector((state) => state);
    console.log(reduxState);

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