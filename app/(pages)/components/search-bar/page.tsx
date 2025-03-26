"use client";

import SearchBar from "@/app/components/ui/SearchBar";


export default function SearchPage() {
    const sampleSuggestions = ["Apple", "Banana", "Cherry"];
  
    const handleSearch = (query: string) => {
      console.log("Searching for:", query);
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Search Page</h1>
        <SearchBar suggestions={sampleSuggestions} onSearch={handleSearch} />
      </div>
    );
  }
  