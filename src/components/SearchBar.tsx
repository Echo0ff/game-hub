import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef, useState } from "react";

interface SearchBarProps {
  onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchText(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchText("");
    onSearch("");
    if (ref.current) {
      ref.current.value = "";
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(searchText);
    }
    if (event.key === "Escape") {
      clearSearch();
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ width: "100%" }}>
    <InputGroup startElement={<BsSearch />} 
    marginRight={5}
    width="100%"
    >
      <Input
        placeholder="Search games..."
        ref={ref}
        onKeyDown={handleKeyDown}
        value={searchText}
        onChange={handleSearch}
      />
    </InputGroup>
    </form>
  );
};

export default SearchBar;
