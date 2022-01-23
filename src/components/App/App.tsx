import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" data-cy="Header">
        <p data-cy="HowReload">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-cy="LearnReact"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
