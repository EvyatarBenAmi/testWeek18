import React from 'react'
import "./SearchBar.css"

export default function SearchBar() {
  
  function search() {
    
  }

  return (
    <div>
        <input className='inputSearch' type="text" placeholder='Search movie by title...' onClick={search}/>
    </div>
  )
}
