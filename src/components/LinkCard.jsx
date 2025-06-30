import React from "react";

function LinkCard({ title, url, onDelete }) {
  return (
    <div className="link-card">
      <h3>{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
      <button onClick={onDelete} className="delete-btn">
        ❌
      </button>
    </div>
  );
}

export default LinkCard;
