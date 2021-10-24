import './App.css'; 
import MarkdownView from './components/MarkdownView';
import NoteList from './components/NoteList';

function App() {
  const markdown = "# test"

  return (
    <div>
      <MarkdownView/>
      <NoteList/>
    </div>

  );
}

export default App;
