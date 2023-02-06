import {Request, Response} from 'express'
import createNote from '../services/notes.js'

// Purpose: Controller for creating notes
async function postNote(req: Request, res: Response) {
  // Create a new note
  try {
    const noteContent = JSON.stringify(req.body)
    await createNote(noteContent)
    res.status(201).json('Created note')
  } catch (error) {
    res.status(500).json({error})
  }
}

export default postNote
