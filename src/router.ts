import {Router} from 'express'
import {createNote, deleteNote, getNote, getNotes} from './handlers/note.js'

const router: Router = Router()

/**
 * Note
 */
router.get('/note/:id', getNote)
router.get('/note', getNotes)
router.post('/note', createNote)
router.delete('/note/:id', deleteNote)

export default router
