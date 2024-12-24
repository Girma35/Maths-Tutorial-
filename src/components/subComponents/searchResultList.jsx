import React from 'react';

function SearchResultList({ result }) {
  return (
    <div className="absolute left-1/3 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 w-96 max-h-64 overflow-y-auto z-50">
      <div className="text-gray-500 text-center">
        {result && result.length > 0 ? (
          result.map((item, index) => (
            <div key={index} className="py-2">
              {item} 
            </div>
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    </div>
  );
}

export default SearchResultList;
