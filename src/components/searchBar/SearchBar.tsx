import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Поиск..."
        value={props.searchQuery}
        onChange={(e) => props.setSearchQuery(e.target.value)}
      />
    </div>
  );
};
