import React from "react";

function MovieDetailSkeleton() {

    return (

    <div className="bg-black min-h-screen p-10 flex gap-10">

        <div className="w-80 h-96 bg-gray-700 animate-pulse rounded-lg"></div>

        <div className="space-y-4">

        <div className="h-10 w-80 bg-gray-700 animate-pulse"></div>

        <div className="h-4 w-40 bg-gray-700 animate-pulse"></div>

        <div className="h-4 w-96 bg-gray-700 animate-pulse"></div>

        <div className="h-4 w-96 bg-gray-700 animate-pulse"></div>

        </div>

    </div>

    );
}

export default MovieDetailSkeleton;