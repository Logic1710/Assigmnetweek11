import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'
import bookRoutes from './routes/book_routes.js'
import {deleteBook} from "./controllers/BookControllers.js";
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

bookRoutes(app)

app.use(bodyParser.json())

app.use(express.static('public'))

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})

