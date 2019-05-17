import React from "react";

export default function SearchBar() {
  const [value, setValue ] = React.useState("");
  return (
    <div className="SearchBox">
      <div className="contentSpacing">
        <input
          type="text"
          value={value}
          placeholder="Start typing..."
          onChange={e => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
