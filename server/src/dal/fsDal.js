import fs, { readFile } from "fs/promises"

export async function readFromDataJson() {
    try {
        const read = await readFile("src/data/data (2).json", "utf-8")
        const data = JSON.parse(read)
        return data
    } catch (error) {
        return `Error: ${error}`
    }
};