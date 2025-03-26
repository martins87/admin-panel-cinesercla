
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  suggestions: string[];
  onSearch: (query: string) => void;
}

const SearchBar = ({ suggestions = [], onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredSuggestions(
      suggestions.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Pesquisar..."
            value={query}
            onChange={handleChange}
            className="w-full pl-10"
          />
        </div>
      </form>
      {query && filteredSuggestions.length > 0 && (
        <ul className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          {filteredSuggestions.map((item, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setQuery(item);
                setFilteredSuggestions([]);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;