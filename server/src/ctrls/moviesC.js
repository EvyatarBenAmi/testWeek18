import { readFromDataJson } from "../dal/fsDal.js"


export const returnMovies = async (req, res) => {
    try {
        const movis = await readFromDataJson()
        return res.send(movis);
    } catch (error) {
        console.log(error)
    }
};