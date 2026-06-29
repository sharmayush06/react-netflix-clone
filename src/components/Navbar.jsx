import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
    return (
    <div>
        <nav className="h-17 bg-black flex items-center p-6 justify-between">
            <h1 className="text-4xl font-semibold text-red-700">NETFLIX</h1>
            <div className="flex flex-row gap-3">
                <Link to='/' className="hover:text-slate-400">Home</Link>
                <Link to='/Search' className="hover:text-slate-400">Search</Link>
            </div>
        </nav>    
    </div>
    )
}

export default Navbar
