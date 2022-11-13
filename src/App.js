
import './index.css';
import Todo from './components/Todo';
import Affirmations from './components/Affirmations';
import Calendar from './components/Calendar';
import Mood from './components/Mood';

function App() {
  return (
    <div className="App">
      <Todo/>
      <Affirmations/>
      <Mood/>
      <Calendar/>
    </div>
  );
}

export default App;
