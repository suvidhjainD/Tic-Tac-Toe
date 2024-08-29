import { useState } from "react";

export default function Player({ initialname, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialname);
  const [isEditing, setIsEditing] = useState(false);

  function handelEditclick() {
    setIsEditing((editing) => !editing);
  }

  function handelChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handelChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditclick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
