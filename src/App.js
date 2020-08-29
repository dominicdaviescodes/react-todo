import React from 'react';
import './App.css';
// Import components
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header>
        <h1>A React Todo List</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
