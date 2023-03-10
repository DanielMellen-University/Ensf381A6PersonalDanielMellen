function Sidebar({ notes, onAddNote, activeNote, setActiveNote }) {
  const sortedNotes = [...notes].sort((a, b) => b.lastModified - a.lastModified);

  const handleNoteClick = (id) => {
    setActiveNote(id);
  };

  return (
    <div id="sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>+</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }) => (
          <div
            key={id}
            className={`app-sidebar-note ${id === activeNote ? "active" : ""}`}
            onClick={() => handleNoteClick(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title?.substr(0, 50) + "..."}</strong>
            </div>
            <p>{body?.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-CA", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

  
  
  