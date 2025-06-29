import React from "react";

function LinkCard({ title, url }) {
  return (
    <div className="link-card">
      <h3>{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  );
}

export default LinkCard;
