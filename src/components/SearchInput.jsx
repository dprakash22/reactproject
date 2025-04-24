import { useState } from 'react';
import { courseList } from '../data/courseList';

const SearchInput = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length === 0) {
      setSuggestions([]);
      return;
    }

    const filtered = courseList.filter(course =>
      course.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search courses..."
        className="w-full p-2 border rounded"
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white border mt-1 shadow z-10 max-h-60 overflow-y-auto">
          {suggestions.map(course => (
            <li
              key={course.id}
              onClick={() => {
                onSelect(course);
                setQuery('');
                setSuggestions([]);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {course.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
