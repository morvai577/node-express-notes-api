import {Request, Response} from 'express'
import prisma from '../db.js'

// Get a particular note
export const getNote = async (req: Request, res: Response) => {
  const note = await prisma.note.findUnique({
    where: {
      id: String(req.params.id),
    },
  })
  res.json({data: note})
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

  res.json({data: notes})
}

// Create a new note
export const createNote = async (req: Request, res: Response) => {
  const note = await prisma.note.create({
    data: {
      title: req.body.title,
      content: req.body.content,
    },
  })

  res.json({data: note})
}

// Delete a note
export const deleteNote = async (req: Request, res: Response) => {
  const note = await prisma.note.delete({
    where: {
      id: String(req.params.id),
    },
  })

  res.json({data: note})
}
