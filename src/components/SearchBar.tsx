import { useEffect, useRef } from "react";
import "../styles/search-bar.css";

interface SearchBarProps {
    searchValue: string;
    setSearchValue: (searchValue: string) => void;
}

function SearchBar({ searchValue, setSearchValue }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="&#128269; Search Products..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    ref={inputRef}
                />
            </div>
        </>
    );
}

export default SearchBar;
