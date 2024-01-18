import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import notesRoutes from './routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.use('/api', notesRoutes)

export default app;