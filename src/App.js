// import logo from './logo.svg';
import './App.css';

import Calculator from './Calculator';
import logo from './logo.png'; // Import the logo file

function App() {
  return (
    // <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
    // </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://mohdzaeem.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Connect
        </a>
      </header>
    <body>
    <h1>React Calculator</h1>
    <Calculator />
    </body>
    
  </div>

  );
}

export default App;


