import React from "react";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>📚 Read Later for Devs</h1>
      </header>

      <main>
        <div className="input-section">
          <input type="text" placeholder="Enter a link or title..." />
          <button>Add</button>
        </div>

        <ul className="read-list">{/* List items will go here */}</ul>
      </main>
    </div>
  );
}

export default App;
