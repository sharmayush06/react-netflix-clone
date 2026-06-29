import React from "react";

function HomeSkeleton() {

    const rows = 5;
    const cards = 8;

    return (
    <div className="bg-black text-white min-h-screen pt-6">

        {Array.from({ length: rows }).map((_, rowIndex) => (

        <div key={rowIndex} className="mb-10">

          {/* Row title skeleton */}
            <div className="h-6 bg-gray-700 w-40 mb-4 mx-6 rounded animate-pulse"></div>

          {/* Movie cards skeleton */}
            <div className="flex gap-4 px-6 overflow-hidden">

            {Array.from({ length: cards }).map((_, cardIndex) => (
            
                <div key={cardIndex} className="min-w-44 animate-pulse">

                <div className="h-64 bg-gray-700 rounded-lg"></div>

                <div className="mt-2 h-4 bg-gray-700 rounded w-3/4"></div>

                </div>

            ))}

            </div>

        </div>

        ))}

    </div>
    );
}

export default HomeSkeleton;