import React, { useEffect, useState } from "react";
import LinkCard from "./components/LinkCard";

function App() {
  const storedLinks = JSON.parse(localStorage.getItem("readLinks")) || [];
  const [links, setLinks] = useState(storedLinks);
  const [inputUrl, setInputUrl] = useState("");

  // Save to localStorage whenever links change
  useEffect(() => {
    localStorage.setItem("readLinks", JSON.stringify(links));
  }, [links]);

  const handleAdd = () => {
    if (inputUrl.trim() === "") return;

    const newLink = {
      id: Date.now(),
      title: inputUrl,
      url: inputUrl,
    };

    setLinks([...links, newLink]);

    setInputUrl("");
  };

  const handleDelete = (idToDelete) => {
    const updatedLinks = links.filter((link) => link.id !== idToDelete);
    setLinks(updatedLinks);
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
          <button onClick={handleAdd}>Add</button>
        </div>

        <ul className="read-list">
          {links.length > 0 ? (
            links.map((link) => (
              <LinkCard
                key={link.id}
                title={link.title}
                url={link.url}
                onDelete={() => handleDelete(link.id)}
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

