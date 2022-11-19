import './App.css';
import Record from './Record.jsx';
import Add from './Add.jsx';

function App() {
  return (
    <div className="App App-header">
      <div id="Top-Header">
          <h1>Add To Database</h1>
          <Add/>
      </div>
      <div>
          <Record/>
      </div>
    </div>
  );
}

export default App;