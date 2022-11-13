
import './index.css';
import Todo from './components/Todo';
import Affirmations from './components/Affirmations';
import Cal from './components/Cal';
import Mood from './components/Mood';
import Event from './components/Event';

function App() {
  return (
    <div className="App">
      <Todo/>
      <Affirmations/>
      <Mood/>
      <Cal/>
      <Event/>
    </div>
  );
}

export default App;
