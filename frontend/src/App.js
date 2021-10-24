import './App.css'; 
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function App() {
  const markdown = " [x] test"

  return (
    <div>
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
}

export default App;
