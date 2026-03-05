import express from "express"
import cors from "cors"
import { returnMovies } from "./ctrls/moviesC.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/api/movies", returnMovies)

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})