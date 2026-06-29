import React from "react";

function SearchSkeleton() {

    return (

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {Array.from({ length: 8 }).map((_, i) => (

        <div
            key={i}
            className="h-64 bg-gray-700 rounded-lg animate-pulse"
        ></div>

        ))}

    </div>

    );
}

export default SearchSkeleton;