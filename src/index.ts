import express from 'express'
import notesRouter from './routes/notes.js'

const app = express()

// Routes for notes
app.use('/notes', notesRouter)

export default app
