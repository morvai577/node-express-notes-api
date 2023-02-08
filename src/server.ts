import express from 'express'
import morgan from 'morgan'
import router from './router.js'

const app = express()

// Register middleware
app.use(morgan('dev'))
app.use(express.json()) // Parse JSON bodies
app.use(express.urlencoded({extended: true})) // Parse URL-encoded bodies

// Register router for API url
app.use('/api', router)

export default app
