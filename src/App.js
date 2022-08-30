import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">

        </header>
        <main>
          <Dictionary defaultKeyword="hi" />
        </main>
        {/* <footer className='text-center'>
        </footer> */}
      </div>
    </div>
  );
}

export default App;
