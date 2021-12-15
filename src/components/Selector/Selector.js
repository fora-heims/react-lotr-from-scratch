import React from 'react';

export default function Selector(props) {
  return (
    <div>
      <select onChange={(e) => props.setRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      <input
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
        type="text"
        placeholder="Search characters"
      ></input>
      <button>Search</button>
    </div>
  );
}
