import React, { useState, ChangeEvent, FormEvent } from 'react';
import { RiSearchLine } from 'react-icons/ri'; // Ícono de búsqueda de React Icons

interface ISearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Llamar a la función de búsqueda con el término de búsqueda actual
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-none rounded-xl px-2 py-2 bg-background-light">
        <RiSearchLine className='text-white'/>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search Here ..."
        className="outline-none border-none flex-grow px-2 bg-transparent text-white"
      />
    </form>
  );
};

export default SearchInput;
