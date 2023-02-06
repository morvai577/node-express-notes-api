import {Router} from 'express'
import {createNote} from './handlers/note.js'

const router: Router = Router()

/**
 * Note
 */
router.post('/note', createNote)

export default router
