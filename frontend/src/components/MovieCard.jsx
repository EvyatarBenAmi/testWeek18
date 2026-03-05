import React, { useEffect, useState } from 'react'

export default function MovieCard() {

    const {data, setData}= useState("")

    useEffect(() => {
        fetch("http://localhost:3000/api/movies", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json()).then(json => {
                setData(json)
                // console.log(json)
            })
    })

    return (
        <div>
            {data}
        </div>
    )
}
