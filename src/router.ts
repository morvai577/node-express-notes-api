import {Router} from 'express'
import {body, param} from 'express-validator'
import {
  createNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from './handlers/note.js'

const router: Router = Router()

/**
 * Note
 */
router.get(
  '/note/:id',
  param('id').isUUID(4).withMessage('Invalid ID'),
  getNote,
)
router.get('/note', getNotes)
router.post('/note', body('title').not().isEmpty().isAlphanumeric(), createNote)
router.delete('/note/:id', deleteNote)
router.put('/note/:id', updateNote)

export default router
