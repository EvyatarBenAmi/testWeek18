import React from 'react'
import "./Home.css"
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

export default function Home() {
    return (
        <div className="divHome">
            <header>
                <h1>Movie Night</h1>
                <p className="pAppTitle">Search a movie and pick your seats</p>
            </header>
            <SearchBar />
            <div className="pass"></div>
            <MovieCard />
        </div >
    )
}
