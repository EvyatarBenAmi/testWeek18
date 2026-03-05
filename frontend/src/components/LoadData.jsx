import React from 'react'
import { useEffect } from 'react'

export default function LoadData() {

     useEffect(() => {
        fetch("http://localhost:3000/api/movies", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json()).then(json => {
                // setdata(json)
                console.log(json)
            })
    })

  return (
    <div>
        data
    </div>
  )
}
