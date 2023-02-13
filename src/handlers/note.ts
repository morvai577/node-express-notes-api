import {Request, Response} from 'express'
import {validationResult} from 'express-validator'
import prisma from '../db.js'

// Get a particular note
export const getNote = async (req: Request, res: Response) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(400)
    return res.json({errors: errors.array()})
  }

  const note = await prisma.note.findUnique({
    where: {
      id: String(req.params.id),
    },
  })
  return res.json({data: note})
}

// Get all notes
export const getNotes = async (req: Request, res: Response) => {
  const notes = await prisma.note.findMany({
    select: {
      id: true,
      title: true,
      content: false,
    },
  })

  return res.json({data: notes})
}

// Create a new note
export const createNote = async (req: Request, res: Response) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(400)
    return res.json({errors: errors.array()})
  }

  const note = await prisma.note.create({
    data: {
      title: req.body.title,
      content: req.body.content,
    },
  })

  return res.json({data: note})
}

// Delete a note
export const deleteNote = async (req: Request, res: Response) => {
  const note = await prisma.note.delete({
    where: {
      id: String(req.params.id),
    },
  })

  return res.json({data: note})
}

// Update a note
export const updateNote = async (req: Request, res: Response) => {
  const note = await prisma.note.update({
    where: {
      id: String(req.params.id),
    },
    data: req.body,
  })

  return res.json({data: note})
}
