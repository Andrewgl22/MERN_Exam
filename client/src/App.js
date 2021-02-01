import './App.css';
import PirateList from './components/PirateList';
import PirateForm from './components/PirateForm';
import PirateInfo from './components/PirateInfo';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <PirateList path="/pirates"/>
        <PirateForm path="/pirate/new"/>
        <PirateInfo path="/pirate/:id"/>
      </Router>
    </div>
  );
}

export default App;
