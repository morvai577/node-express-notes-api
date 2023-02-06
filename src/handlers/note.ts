import {Request, Response} from 'express'
import prisma from '../db.js'

export const createNote = async (req: Request, res: Response) => {
  const note = await prisma.note.create({
    data: {
      content: req.body.content,
    },
  })

  res.json({data: note})
}