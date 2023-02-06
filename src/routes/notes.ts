import express from 'express'
import postNote from '../controllers/notes.js'

const notesRouter: express.Router = express.Router()

// Route to create a new note
notesRouter.post('/', postNote)

export default notesRouter
