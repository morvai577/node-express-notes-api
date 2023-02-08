import {Request, Response} from 'express'
import prisma from '../db.js'

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

export const createNote = async (req: Request, res: Response) => {
  const note = await prisma.note.create({
    data: {
      title: req.body.title,
      content: req.body.content,
    },
  })

  res.json({data: note})
}

export const deleteNote = async (req: Request, res: Response) => {
  const note = await prisma.note.delete({
    where: {
      id: String(req.params.id),
    },
  })

  res.json({data: note})
}
