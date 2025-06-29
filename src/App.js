import React, {useState} from "react";
import LinkCard from "./components/LinkCard";

const dummyLinks = [
  { id: 1, title: "JavaScript Info", url: "https://javascript.info" },
  { id: 2, title: "MDN Docs", url: "https://developer.mozilla.org" },
];



function App() {

  const [links, setLinks] = useState(dummyLinks);

  const [inputUrl, setInputUrl] = useState("")

  const handleAdd = () => {

   if (inputUrl.trim() === "") return; // ignore empty input

  const newLink = {
    id: Date.now(), // unique id
    title: inputUrl, // using URL as title for now
    url: inputUrl,
  };

  setLinks([links, newLink]); // update the list
  setInputUrl(""); // clear the input field
};


  return (
    <div className="app-container">
      <header>
        <h1>📚 Read Later for Devs</h1>
      </header>

      <main>
        <div className="input-section">
        <input
         type="text"
          placeholder="Enter a URL"
           value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />

          <button onClick = {handleAdd}>Add</button>
          
        </div>

        <ul className="read-list">
          {/* Ternary operator */}
         {links.length > 0 ? (
           links.map((link) => (
         <LinkCard
          key={link.id}
          title={link.title} 
          url={link.url}
           />
    ))
  ) : (
    <p>No links saved yet.</p>
  )}
      </ul>

      </main>
    </div>
  );
}

export default App;
