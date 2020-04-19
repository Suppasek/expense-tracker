import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './models'
import './auth/passport'
import router from './routes/'
import cors from 'cors'

dotenv.config()

connectDb(process.env.DB)

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(port, () => console.log(`Server is running on port ${port}`))
