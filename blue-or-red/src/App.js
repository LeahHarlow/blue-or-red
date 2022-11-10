
import './App.css';
import './easyManipulation.js'
import Balloons from './components/Balloons'
import UserReport from './components/UserReport';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Balloons />
      <UserReport />
      </header>
    </div>
  );
}

export default App;
