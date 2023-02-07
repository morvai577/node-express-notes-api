import {Router} from 'express'
import {createNote, getNotes} from './handlers/note.js'

const router: Router = Router()

/**
 * Note
 */
router.get('/note', getNotes)
router.post('/note', createNote)

export default router
